import { useState } from "react";
import axios from "axios";
import Editor from "@monaco-editor/react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum(a,b){
  return a+b;
}`);

  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

  async function reviewCode() {
    try {
      setLoading(true);

      const res = await axios.post(
        "http://localhost:3000/ai/get-review",
        { code }
      );

      setReview(res.data.review || res.data);
    } catch (err) {
      console.log(err);
      setReview("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="app">

      <header className="header">
        🤖 AI Code Reviewer
      </header>

      <div className="container">

        <div className="left">

          <div className="editor">

            <Editor
              height="100%"
              defaultLanguage="javascript"
              theme="vs-dark"
              value={code}
              onChange={(value) => setCode(value || "")}
              options={{
                automaticLayout: true,
                fontSize: 16,
                minimap: {
                  enabled: false,
                },
                scrollBeyondLastLine: false,
              }}
            />

          </div>

          <button
            onClick={reviewCode}
            className="btn"
          >
            {loading ? "Reviewing..." : "🚀 Review Code"}
          </button>

        </div>

        <div className="right">

          <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
            {review || "# AI Review will appear here"}
          </ReactMarkdown>

        </div>

      </div>

    </div>
  );
}

export default App;
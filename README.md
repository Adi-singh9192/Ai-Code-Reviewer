<p align="center">
    <img src="./assets/ai-code-reviewer-banner.png" width="100%" alt="AI Code Reviewer Banner">
</p>

<div align="center">

# 🤖 AI Code Reviewer

### AI-powered Code Review Platform using Google Gemini AI

Analyze code, detect bugs, improve performance, identify security issues, and receive professional code review suggestions instantly.

![React](https://img.shields.io/badge/React-19-blue?logo=react)
![Node.js](https://img.shields.io/badge/Node.js-Express-green?logo=node.js)
![Gemini](https://img.shields.io/badge/Google-Gemini_AI-orange?logo=google)
![Monaco Editor](https://img.shields.io/badge/Editor-Monaco-blue)
![License](https://img.shields.io/badge/License-MIT-success)

</div>

---

# 📌 Overview

AI Code Reviewer is a full-stack web application that leverages **Google Gemini AI** to review source code like an experienced software engineer.

Instead of only detecting syntax errors, the AI provides:

- ✅ Code Quality Analysis
- ⚡ Performance Improvements
- 🔒 Security Suggestions
- 🧹 Best Practices
- 📖 Readability Improvements
- 🧠 Clean Code Recommendations
- 🚀 Refactored Code Examples

---

# ✨ Features

- 💻 Monaco Code Editor
- 🤖 Google Gemini AI Integration
- 📝 Markdown Response Rendering
- 🌈 Syntax Highlighting
- ⚡ Real-time AI Code Review
- 🔍 Bug Detection
- 🔒 Security Analysis
- 🚀 Performance Optimization Suggestions
- 📚 Clean Code Recommendations
- 📱 Responsive UI

---

# 🛠 Tech Stack

## Frontend

- React.js
- Vite
- Monaco Editor
- Axios
- React Markdown
- Rehype Highlight
- CSS3

## Backend

- Node.js
- Express.js
- Google Gemini AI SDK
- dotenv

---

# 📂 Project Structure

```
AI-Code-Reviewer
│
├── Backend
│   ├── src
│   │   ├── controllers
│   │   ├── routes
│   │   ├── services
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── FrontEnd
│   ├── src
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── public
│   └── package.json
│
└── README.md
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/Adi-singh9192/AI-Code-Reviewer.git

cd AI-Code-Reviewer
```

---

## Backend Setup

```bash
cd Backend

npm install
```

Create a `.env`

```env
GOOGLE_GEMINI_KEY=YOUR_GEMINI_API_KEY
```

Start Backend

```bash
npm run dev
```

---

## Frontend Setup

```bash
cd FrontEnd

npm install

npm run dev
```

---

# 🌐 API Endpoint

## Review Code

```http
POST /ai/get-review
```

### Request

```json
{
  "code": "function add(a,b){ return a+b; }"
}
```

---

### Response

````markdown
# Code Review

## Issues

- Missing input validation
- No documentation
- Doesn't handle invalid values

## Suggested Improvements

```javascript
function add(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        throw new Error("Inputs must be numbers");
    }

    return a + b;
}
```

# 1 - JSX & React App Setup

This section covers how I created my first React app and learned the basics of JSX.

## 🚀 What I Did

- Created a React app using `create-react-app`
- Ran the dev server and saw output in the browser
- Edited `App.js` to write JSX
- Learned what JSX is and how it works

## 🔧 React App Setup

To create a new React app:

```git bash
npx create-react-app jsx-demo
cd jsx-demo
npm start

then we have to work on src/App.js file
```

## ✅ SECTION 4: What is JSX?

`````md
## 🧠 What is JSX?

JSX (JavaScript XML) is a syntax extension for JavaScript. It lets you write HTML-like code inside JS files to describe the UI.

Example:

````jsx
const name = "Chhoton";

function App() {
  return <h1>Hello, {name}!</h1>;
}

## ✅ SECTION 5: Why Use JSX?

### ✍️ Purpose:
Understand **why** JSX is helpful in real-world development.

### 📄 What to Write:
```md
## ❓ Why Do We Use JSX?

| Reason                        | Explanation                                                   |
|-------------------------------|---------------------------------------------------------------|
| Easier UI Code                | JSX looks like HTML and is easier to write than `createElement` |
| Reusable Components           | JSX helps define UI blocks inside components                 |
| Logic + Markup Together       | You can use JS variables inside HTML using `{}`              |
✅ Example Explanation:
````
`````

```

## 📌 Rules of JSX (Very Important)

| Rule                         | Example                                |
|------------------------------|----------------------------------------|
| Wrap everything in one root  | ✅ `<div>...</div>`                     |
| Use `className` not `class`  | ✅ `<div className="box">`              |
| Use `htmlFor` not `for`      | ✅ `<label htmlFor="email">`            |
| Expressions inside `{}`      | ✅ `<p>Hello, {name}</p>`               |
| Close all tags               | ✅ `<img src="" />`, `<input />`       |

```

## 💻 JSX Practice I Did

```jsx
const favColor = "blue";
const today = new Date().toDateString();

function App() {
  return (
    <div>
      <h1>Hello, I’m Chhoton 👋</h1>
      <p>My favorite color is {favColor}</p>
      <p>Today is {today}</p>
      <p>4 * 5 = {4 * 5}</p>
    </div>
  );
}
```

## ✅ SECTION 8: Final Summary

### ✍️ Purpose:

Close the topic — highlight what you mastered.

### 📄 What to Write:

```md
## 🔚 Summary

| Learned                      | ✅  |
| ---------------------------- | --- |
| How to create React app      | ✅  |
| What JSX is and how it works | ✅  |
| Why JSX is useful            | ✅  |
| JSX Rules                    | ✅  |
| Wrote JSX in App.js          | ✅  |
| Ran and viewed in browser    | ✅  |
```

---

## 🚀 Progress Tracking

✅ **Status:** Done  
📍 **Current:** 1 - JSX & Basics React App Setup  
⬅️ **Previous:** [0 - Introduction](../README.md)  
➡️ **Next:** [2 - Folder Structure & Best Practices](../2-Folder-Structure)

## 🔗 Navigation

⬅️ [0 - Introduction](../0-Induction) | 1 - JSX & React Setup(CURRENT) | ➡️ [2 - Folder Structure & Best Practices](../2-Folder-Structures)

### ✍️ Author: Chhoton Choudhury

📁 Part of my public React learning roadmap

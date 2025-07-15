# 2 - Folder Structure & Best Practices

In this topic, I explored how a React project works internally, different ways to use React (via CLI or CDN), how React renders content, and best folder structuring techniques for scalable projects.

---

## 🧠 What You'll Learn

- How a React project is structured
- Folder naming conventions
- What belongs in each folder
- Best practices followed in large-scale apps
- Whether you can use React via CDN (without create-react-app)

---

## 🧠 How React Works Internally

When you create a React app using `create-react-app`, the core entry point is `index.js`, which renders the root component (`App.js`) into the DOM.

---

## 🗂️ Typical React App Folder Structure (CRA Default)

When you run `npx create-react-app my-app`, it generates a structure like:

```txt
my-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── assets/           # Images, fonts, global styles
│   ├── components/       # Reusable UI components
│   ├── pages/            # Route-based pages
│   ├── App.js            # Main app logic and routes
│   ├── index.js          # Entry point to render <App />
├── .gitignore
├── package.json
├── README.md
```

---

## 🧠 How React Works Internally (Step by Step)

When you run a React app, the flow goes like this:

### 🔹 Step 1: It Starts from `public/index.html`

```html
<!-- public/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>React App</title>
  </head>
  <body>
    <div id="app-root"></div>
  </body>
</html>
```

🧠 **Explanation**:

- This HTML is what the browser loads.
- React doesn't directly modify this file — it just uses it.
- The key part is:
  ```html
  <div id="app-root"></div>
  ```
  This is where your entire React UI will be injected.

---

### 🔹 Step 2: `index.js` Connects to That Div

```jsx
// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp";

// Find the root div from index.html
const mountNode = document.getElementById("app-root");

// Connect React to the real DOM and render MainApp
const root = ReactDOM.createRoot(mountNode);
root.render(<MainApp />);
```

🧠 **Explanation**:

- We're using `ReactDOM.createRoot()` (introduced in React 18) to create a React "root".
- It tells React: _"Hey, that div with ID `app-root` is where you'll work."_
- We then render a component called `<MainApp />` inside it.

---

### 🔹 Step 3: `MainApp.js` is the Root Component

```jsx
// src/MainApp.js
function MainApp() {
  return (
    <section>
      <h1>Hello from MainApp Component!</h1>
      <p>This is the starting point of your UI.</p>
    </section>
  );
}

export default MainApp;
```

🧠 **Explanation**:

- This component is what the user sees.
- It's the root of your UI tree.
- We renamed `App` to `MainApp` to make it more descriptive.

---

### 🔄 Complete Flow Recap

```bash
Browser loads => public/index.html
                |
                ↓
Finds <div id="app-root">
                |
                ↓
src/index.js finds that div → injects React here
                |
                ↓
index.js renders <MainApp /> → output shows in browser
```

---

### 📄 index.js

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

#### 📌 Explanation:

- `ReactDOM.createRoot()` creates the root React node.
- `document.getElementById("root")` targets the `div` inside `index.html`.
- `<App />` is the top-level component of the UI that gets rendered inside that root.

### 📄 App.js

```jsx
function App() {
  return (
    <div>
      <h1>Hello from App Component!</h1>
    </div>
  );
}

export default App;
```

#### 📌 Explanation:

- `App()` is a functional component that returns JSX.
- Whatever is inside the return block will appear on the webpage.
- This component is rendered from `index.js` as the main UI.

---

## ⚙️ React Render Flow (From Request to UI)

1. Loads `public/index.html`
2. Finds `<div id="root">`
3. `index.js` mounts `<App />` into it
4. `App.js` renders UI content

---

## 🌐 Using React with CDN (Without CLI)

You can use React without Node.js or `create-react-app` by embedding it via CDN:

### 🧪 Example: React via CDN in a `.html` file

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React via CDN</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      const App = () => {
        return (
          <div>
            <h1>Hello React from CDN!</h1>
            <p>This is rendered using React + Babel + CDN.</p>
          </div>
        );
      };

      ReactDOM.createRoot(document.getElementById("root")).render(<App />);
    </script>
  </body>
</html>
```

> 🔎 This is useful for quick demos, playgrounds, or when you're not using any build tools.

---

## 📁 Suggested Folder Structure for Large Projects

```bash
src/
├── assets/            # Static files (images, icons)
├── components/        # Reusable UI components
├── pages/             # Page-level views
├── routes/            # Routing setup
├── services/          # API services
├── hooks/             # Custom React hooks
├── context/           # React context providers
├── utils/             # Helper functions
├── App.js
└── index.js
```

---

## 🧑‍💻 Best Practices

| Practice                       | Description                             |
| ------------------------------ | --------------------------------------- |
| ✅ Component-based structure   | Keep logic isolated in small components |
| ✅ File/folder separation      | Organize code by features not types     |
| ✅ Absolute imports            | Avoid deep relative `../../../` paths   |
| ✅ Keep App.js clean           | Only routing and layout logic           |
| ✅ Store assets in `/assets`   | For static resources                    |
| ✅ Custom hooks for logic      | Keep components UI-only                 |
| ✅ `.env` for environment vars | Never hardcode URLs or secrets          |

---

## 🔚 Summary

| Learned                                | ✅  |
| -------------------------------------- | --- |
| How React app renders to the DOM       | ✅  |
| How `index.js` and `App.js` connect    | ✅  |
| How to embed React via CDN             | ✅  |
| Default and scalable folder structures | ✅  |
| React best practices                   | ✅  |

---

## Practice & Revision

## 📘 Concept Check – Answers & Guide

| Question                                                                      | Answer                                                                                                                                                                                                                                                                                       |
| ----------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ✅ **What is the role of `public/index.html` in a React app?**                | It is the static HTML template. React injects the UI into the `<div id="root">` defined in this file.                                                                                                                                                                                        |
| ✅ **What happens in `index.js`?**                                            | This is the entry point for your React code. It uses `ReactDOM.createRoot()` to render the root component (e.g. `App.js` or `MainApp.js`) inside the DOM element defined in `index.html`.                                                                                                    |
| ✅ **What is the difference between `ReactDOM.render()` and `createRoot()`?** | `ReactDOM.render()` was used before React 18. From React 18 onward, `createRoot()` enables concurrent features and is the recommended way to initialize your app.                                                                                                                            |
| ✅ **Can we use React without `npm` or `CRA`? How?**                          | Yes! You can include React and ReactDOM using CDN links inside a plain `.html` file and write JSX with the help of Babel (`babel-standalone`).                                                                                                                                               |
| ✅ **What is the purpose of each folder: `components`, `pages`, etc.?**       | - `components/`: Small, reusable UI building blocks<br> - `pages/`: Route-based full views like Home, About, etc.<br> - `assets/`: Static files like images, fonts<br> - `hooks/`: Reusable custom logic functions<br> - `context/`: Global state providers<br> - `utils/`: Helper functions |

---

## 🔧 Tasks to Practice – Step-by-Step

### ✅ 1. Create a Working Demo Using React via CDN

Create a new file `index.html` and paste:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>React CDN Blog</title>
    <script
      src="https://unpkg.com/react@18/umd/react.development.js"
      crossorigin
    ></script>
    <script
      src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
      crossorigin
    ></script>
    <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
  </head>
  <body>
    <div id="root"></div>

    <script type="text/babel">
      const BlogHeader = () => <h1>📚 My Blog Header</h1>;

      const BlogApp = () => (
        <div>
          <BlogHeader />
          <p>Welcome to my blog homepage!</p>
        </div>
      );

      ReactDOM.createRoot(document.getElementById("root")).render(<BlogApp />);
    </script>
  </body>
</html>
```

💡 Open this file in any browser and it should work without npm or React CLI.

---

### ✅ 2. Rename `App.js` to `MainApp.js` and Update Reference

1. Rename file:

   ```
   mv src/App.js src/MainApp.js
   ```

2. Update `index.js`:

```js
import React from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./MainApp";

const root = ReactDOM.createRoot(document.getElementById("app-root"));
root.render(<MainApp />);
```

3. Your `MainApp.js`:

```jsx
function MainApp() {
  return (
    <div>
      <h1>Welcome from MainApp!</h1>
    </div>
  );
}

export default MainApp;
```

✅ Now it’s clearer and more semantically named.

---

### ✅ 3. Organize a Demo App Using Folders

Here’s how you could break down your blog project:

```bash
src/
├── assets/
│   └── banner.jpg
├── components/
│   ├── Header.js
│   └── BlogPostCard.js
├── pages/
│   ├── Home.js
│   └── BlogDetails.js
├── context/
│   └── BlogContext.js
├── hooks/
│   └── useBlogData.js
├── services/
│   └── blogApi.js
├── utils/
│   └── formatDate.js
├── MainApp.js
└── index.js
```

With example import in `MainApp.js`:

```js
import Header from "./components/Header";
import Home from "./pages/Home";
```

✅ This will help you scale and maintain the project easily.

---

## 🔗 Navigation

⬅️ [1 - JSX & React Setup](../1-JSX-and-Basics) | 2 - Folder Structure(CURRENT) | ➡️ [3 - Components & Props](../3-Components-and-Props)

---

### ✍️ Author: Chhoton Choudhury

📁 Part of my public **React Learning Roadmap**

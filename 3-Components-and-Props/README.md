# 3 - Components & Props

This section dives deep into how React uses **components** to build modular, reusable UIs, and how **props** allow those components to be dynamic and flexible.

---

## 🧠 What You'll Learn

- What is a component in React?
- Functional vs Class components
- What are props and how they help
- Why components and props make UI powerful
- Common best practices when using components

---

## 📘 What is a Component?

A **component** in React is a reusable, isolated piece of UI logic. Think of components as building blocks — like LEGO bricks — that combine to build your full app.

There are two types of components:

1. **Functional Components** (modern & recommended ✅)
2. **Class Components** (older approach 🧓)

---

## ✅ Functional Component — Example 1: Basic Greeting

```jsx
function Greeting() {
  return <h2>Hello from a Functional Component!</h2>;
}

export default Greeting;
```

**Usage in App.js**

```jsx
import Greeting from "./Greeting";

function App() {
  return (
    <div>
      <Greeting />
    </div>
  );
}
```

---

## ✅ Functional Component — Example 2: Dynamic InfoCard

```jsx
function InfoCard() {
  const name = "Chhoton";
  const age = 22;

  return (
    <div>
      <h3>Name: {name}</h3>
      <p>Age: {age}</p>
    </div>
  );
}

export default InfoCard;
```

**Usage in App.js**

```jsx
import InfoCard from "./InfoCard";

function App() {
  return (
    <div>
      <InfoCard />
    </div>
  );
}
```

---

## 🧠 What Are Props?

**Props** (short for “properties”) are how you pass data from a parent to a child component.  
Think of props like arguments to a function.

```jsx
function Welcome(props) {
  return <h2>Welcome, {props.username}!</h2>;
}

export default Welcome;
```

**Usage in App.js**

```jsx
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <Welcome username="Chhoton" />
    </div>
  );
}
```

---

## ✅ Destructuring Props — Example 4

```jsx
function Profile({ name, age }) {
  return (
    <div>
      <h4>{name}</h4>
      <p>Age: {age}</p>
    </div>
  );
}

export default Profile;
```

**Usage in App.js**

```jsx
import Profile from "./Profile";

function App() {
  return (
    <div>
      <Profile name="Chhoton" age={22} />
    </div>
  );
}
```

## ✅ Passing JSX, Arrays, Functions as Props — Example 5

```jsx
function CustomCard({ title, content, footer }) {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px" }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <div>{footer}</div>
    </div>
  );
}

export default CustomCard;
```

**Usage in App.js**

```jsx
import CustomCard from "./CustomCard";

function App() {
  return (
    <div>
      <CustomCard
        title="Hello React!"
        content="Props make components powerful"
        footer={<small>Footer Info</small>}
      />
    </div>
  );
}
```

---

## ✅ Class Component (Old School) — Example: UserInfo with pros

```jsx
import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const { name, email } = this.props;

    return (
      <div>
        <h3>User: {name}</h3>
        <p>Email: {email}</p>
      </div>
    );
  }
}

export default UserInfo;
```

**Usage in App.js**

```jsx
import UserInfo from "./UserInfo";

function App() {
  return (
    <div>
      <UserInfo name="Chhoton" email="chhoton@example.com" />
    </div>
  );
}
```

---

## 🧠 Concept Check – With Answers

| ✅ Check Your Understanding                                           | ✅ Answer                                                                                                  |
| --------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| What is the difference between functional and class components?       | Functional components are functions and use hooks. Class components use ES6 classes and lifecycle methods. |
| How do you pass data to a component?                                  | By using props like `<Component propName="value" />`.                                                      |
| What are props and why are they important?                            | Props (properties) are inputs to components. They allow reusability and dynamic rendering.                 |
| Can you pass a function or JSX as a prop?                             | ✅ Yes! Functions and JSX elements can be passed and used inside the child component.                      |
| What happens if you try to change props inside a child component?     | ❌ You should never modify props. They are read-only. Use state instead.                                   |
| How do you destructure props in both functional and class components? | In functional: `function Comp({name}){}`. In class: `const { name } = this.props;`.                        |

---

## 🔧 Tasks to Practice

1. ✅ Create a `UserCard` component that receives `name`, `email`, `role` via props.
2. ✅ Create a component that renders a button. Pass the button text via props.
3. ✅ Create a `BlogPost` component with `title`, `author`, `content` as props.
4. ✅ Try passing an array of items via props and map through them in the child.
5. ✅ Build a reusable `AlertBox` component. Use props to customize the message and color.

---

## 🔚 Summary

| Learned                              | ✅  |
| ------------------------------------ | --- |
| What are components                  | ✅  |
| Functional vs Class components       | ✅  |
| What are props                       | ✅  |
| How to pass props                    | ✅  |
| Props destructuring                  | ✅  |
| Different data types passed as props | ✅  |
| Reusing components with props        | ✅  |

---

## 🔗 Navigation

⬅️ [2 - Folder Structure & Best Practices](../2-Folder-Structure) | 3 - Components & Props (CURRENT) | ➡️ [4 - State & Events](../4-State-and-Events)

---

### ✍️ Author: Chhoton Choudhury

📁 Part of my public **React Learning Roadmap**

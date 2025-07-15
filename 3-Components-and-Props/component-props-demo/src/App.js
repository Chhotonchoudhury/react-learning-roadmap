import logo from './logo.svg';
import './App.css';
import UserCard from './components/UserCard';
import ButtonComponent from './components/ButtonComponent';
import BlogPost from './components/BlogPost';
import ListRenderer from './components/ListRenderer';
import AlertBox from './components/AlertBox';

function App() {
  const fruits = ["Apple", "Banana", "Cherry"];

  return (
     <div>
      <h1>👤 User List</h1>
      <UserCard name="Chhoton Choudhury" email="chhoton@example.com" role="Admin" />
      <ButtonComponent text="Click Me" />
      <UserCard name="Riya Das" email="riya@example.com" role="Editor" />
      <ButtonComponent text="Submit" />

      <hr />

      <h2>📝 Blog Post</h2>
      <BlogPost
        title="Getting Started with React"
        author="Chhoton Choudhury"
        content="React is a powerful library for building user interfaces..."
      />

      <hr />

      <h2>📋 List Renderer</h2>
      <ListRenderer items={fruits} />

      <hr />

      <h2>⚠️ Alert Box</h2>
      <AlertBox message="This is a success message!" color="green" />
      <AlertBox message="This is an error message!" color="red" />
    </div>
  );
}

export default App;

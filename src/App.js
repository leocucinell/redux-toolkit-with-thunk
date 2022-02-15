import './App.css';
import PostList from './components/PostList';
import AddPost from './components/AddPost';

function App() {
  return (
    <div className="App">
      <h1>POSTS PAGE</h1>
      <p>Here are all of your posts</p>
      <hr />
      <PostList />
      <hr />
      <AddPost />
    </div>
  );
}

export default App;

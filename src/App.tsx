import React from "react";
import "./App.css";
import Delete from "./Delete";
import Home from "./Home";
import Post from "./Post";
import Put from "./Put";

function App() {
  return (
    <div className="App">
      <Home />
      <Post />
      <Delete />
      <Put />
    </div>
  );
}

export default App;

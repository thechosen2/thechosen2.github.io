import React from "react";
import Markdown from "react-markdown";
import Post from "../components/blogmaker";
const Home = (props) => {
  return (
    <div className="home-container">
        <Post path={"home.md"} name={"home"}/>
    </div>
  )
};

export default Home;

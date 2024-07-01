import React from "react";
import Markdown from "react-markdown";
import Blog from "../components/blogmaker";
const Home = (props) => {
  return (
    <div className="home-container">
        <Blog path={"home.md"} name={"home"}/>
    </div>
  )
};

export default Home;

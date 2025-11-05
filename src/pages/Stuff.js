import React from "react";
import { Link } from "react-router-dom";
import "../styles/stuff.css";
import blogMap from "../components/blogmap";

const Stuff = () => {
  return (
    <div className="stuff-container">
      {Object.entries(blogMap).map(([name, { title, snippet, path }]) => {
        const isInternalPost = title.includes("[Post]") || title.includes("[Blog]") || path.includes(".md");

        return isInternalPost ? (
          <Link to={`/stuff/blog/${name}`} className="post-card" key={name}>
            <div className="post-title">{title}</div>
            <div className="post-snippet">{snippet}</div>
          </Link>
        ) : (
          <a href={path} className="post-card" key={name} target="_blank" rel="noopener noreferrer">
            <div className="post-title">{title}</div>
            <div className="post-snippet">{snippet}</div>
          </a>
        );
      })}
    </div>
  );
};


export default Stuff;

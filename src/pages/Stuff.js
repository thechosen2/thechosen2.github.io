import React from "react";
import { Link } from "react-router-dom";
import "../styles/stuff.css";
import blogMap from "../components/blogmap";

const Stuff = () => {
  return (
    <div className="stuff-container">
      {Object.entries(blogMap).map(([name, { title, snippet, path }]) => {
      const isInternalPost = path.includes(".md");
      const isPdf = path.endsWith(".pdf");

      if (isInternalPost) {
        return (
          <Link to={`/stuff/blog/${name}`} className="post-card" key={name}>
            <div className="post-title">{title}</div>
            <div className="post-snippet">{snippet}</div>
          </Link>
        );
      }

      // PDFs → open *directly* in a new tab
      if (isPdf) {
        return (
          <a
            href={path}
            key={name}
            className="post-card"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="post-title">{title}</div>
            <div className="post-snippet">{snippet}</div>
          </a>
        );
      }

      // external repos
      return (
        <a
          href={path}
          key={name}
          className="post-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="post-title">{title}</div>
          <div className="post-snippet">{snippet}</div>
        </a>
      );
  })}

    </div>
  );
};

export default Stuff;
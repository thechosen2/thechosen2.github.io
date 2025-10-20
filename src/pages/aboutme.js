import React from "react";
import Post from "../components/blogmaker";
import "../styles/aboutme.css";

const Aboutme = () => {
  return (
    <div className="aboutme-container">
      <div className="aboutme-section aboutme-info">
        <Post path={"/markdowns/aboutme.md"} name={"aboutme"} />
      </div>
      <div className="aboutme-section aboutme-links">
        <Post path={"/markdowns/links.md"} name={"links"} />
      </div>
    </div>
  );
};

export default Aboutme;

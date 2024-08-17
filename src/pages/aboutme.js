import React from "react";
import Markdown from 'react-markdown';
import Post from "../components/blogmaker";
import { useEffect, useState } from "react";
const Aboutme = (props) => {
  
  return (
    <div className="aboutme-container">
      <Post path={"aboutme.md"} name={"aboutme"}/>
    </div>
  )
};

export default Aboutme;

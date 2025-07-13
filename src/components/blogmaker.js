import React from "react"
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "../styles/posts.css";

const Post = (props) => {
    const [File, setFile] = useState("")
    const p = props.path;
    console.log(p);
    console.log("Class:", p.includes("blogs/") ? "blog-left-align" : "no-align");
    useEffect(() => {
        fetch(p)
        .then((res) => res.text())
        .then((text) => setFile(text))
        .catch((err) => console.error("Error loading markdown:", err));
    }, [p]);
    const name = props.name;
    let md = File;
    function getvalue(ele, str){
        let i = ele.search(str);
        let firstindex = ele.indexOf("(", i);
        let nextindex = ele.indexOf(")", firstindex+1);
        let value = ele.substring(firstindex+1, nextindex);
        return value;
    }

    function getelement(ele, str) {
        let i = ele.search(str);
        if (i === -1) return "";
        let firstindex = ele.indexOf(">", i);
        let nextindex = ele.indexOf("<", firstindex + 1);
        return ele.substring(firstindex + 1, nextindex).trim();
    }

    let li;
    const title = getelement(File, "<title>");
    const author = getelement(File, "<author>");
    const date = getelement(File, "<date>");

    md = md.replace(/<title>.*?<\/title>/, "")
                     .replace(/<author>.*?<\/author>/, "")
                     .replace(/<date>.*?<\/date>/, "")
                     .trim();
    try{
        li = md.split(/(\r\n)/);
        // console.log(li);
    }
    catch(err){
        li = [];
    }
    let s=0;
    let breakct = 0;
  return (
    <div className={`${name}-blogstyle`}>
        {p.includes("blogs/") && (
                <div className="blog-header">
                    <h1>{title}</h1>
                    <p className="blog-meta">by <a href="/#/me" ><b>{author}</b></a> • <text style={{color: "rgb(161, 161, 161)"}}>{date}</text></p>
                </div>
            )}
        {
            li.map((ele)=> {
                if(ele.search("<img>") !== -1){
                    breakct = 0;
                    let src = getvalue(ele, "src");
                    let height = getvalue(ele, "height");
                    let width = getvalue(ele, "width");
                    let radius = getvalue(ele, "radius");
                    let id = getvalue(ele, "id");
                    radius = parseInt(radius);
                    s++;
                    return (<img src={src} key={s} alt={"idk"} height={height} width={width} id={id} style={{borderRadius: radius}}/>);
                }
                else if(ele.search("\r\n") !== -1 || ele === ""){
                    if (breakct === 0){
                        // console.log(ele, s);
                        breakct = 1;
                    }
                    else{
                        // console.log(ele, s);
                        return (<br></br>);
                    }
                }
                else{
                    breakct = 0;
                    s++;
                    return (
                        <ReactMarkdown key={s} children={ele.trim().toString()} remarkPlugins={[remarkMath]} rehypePlugins={[rehypeKatex]} className={p.includes("blogs/")? "blogpost-leftalign .blogpost-container" : ""}></ReactMarkdown>
                    );
                }
                return (<></>);
            })
        }
    </div>
  )
};

export default Post;
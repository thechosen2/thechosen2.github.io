import React from "react"
import ReactMarkdown from "react-markdown";
import { useState, useEffect } from "react";

const Post = (props) => {
    const [File, setFile] = useState("")
    const p = props.path;
    useEffect(() => {
        import(`../markdowns/${p}`)
        .then(res => {
            fetch(res.default)
            .then(res => res.text())
            .then(res => setFile(res));
        })
        .catch(err => console.log(err));
    }, []);
    const name = props.name;
    let md = File;
    function getvalue(ele, str){
        let i = ele.search(str);
        let firstindex = ele.indexOf("(", i);
        let nextindex = ele.indexOf(")", firstindex+1);
        let value = ele.substring(firstindex+1, nextindex);
        return value;
    }
    let li;
    try{
        li = md.split("\n");
    }
    catch(err){
        li = [];
    }
    let s=0;
  return (
    <div className={name + "-blogstyle"}>
        {
            li.map((ele)=> {
                if(ele.search("<img>") !== -1){
                    let src = getvalue(ele, "src");
                    let height = getvalue(ele, "height");
                    let width = getvalue(ele, "width");
                    let radius = getvalue(ele, "radius");
                    radius = parseInt(radius);
                    s++;
                    return (<img src={src} key={s} alt={"idk"} height={height} width={width} style={{borderRadius: radius}}/>);
                }
                else{
                    s++;
                    return (
                        <ReactMarkdown key={s} children={ele.trim().toString()}></ReactMarkdown>
                    );
                }
                return (<></>);
            })
        }
    </div>
  )
};

export default Post;

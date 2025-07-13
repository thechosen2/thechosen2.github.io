import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "../styles/posts.css";

const Post = ({ path, name }) => {
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(path)
      .then((res) => res.text())
      .then(setContent)
      .catch((err) => console.error("Error loading markdown:", err));
  }, [path]);

  const title = content.match(/<title>(.*?)<\/title>/)?.[1];
  const author = content.match(/<author>(.*?)<\/author>/)?.[1];
  const date = content.match(/<date>(.*?)<\/date>/)?.[1];

  let cleanContent = content
    .replace(/<title>.*?<\/title>/, "")
    .replace(/<author>.*?<\/author>/, "")
    .replace(/<date>.*?<\/date>/, "")
    .trim();

  // Split content by lines for custom elements
  const lines = cleanContent.split(/\r?\n/);

  const getAttr = (str, attr) =>
    str.includes(attr + "=")
      ? str.match(new RegExp(`${attr}=\\((.*?)\\)`))?.[1]
      : undefined;

  let idx = 0;
  const rendered = lines.map((line, i) => {
    if (line.includes("<img>")) {
      const src = getAttr(line, "src");
      const height = getAttr(line, "height");
      const width = getAttr(line, "width");
      const id = getAttr(line, "id");
      let radius = getAttr(line, "radius");
      if (radius && !radius.includes("px")) radius += "px";
      return (
        <img
            key={`img-${i}`}
            src={src}
            id={id}
            height={height}
            width={width}
            alt=""
            style={{
                borderRadius: radius,
                display: "inline",
                margin: "1rem auto"
            }}
            />
      );
    } else if (line.includes("<br-space>")) {
      return <div key={`br-space-${i}`} style={{ height: "1.5rem" }} />;
    } else {
      return (
        <ReactMarkdown
          key={`md-${i}`}
          children={line}
          skipHtml={false}
          remarkPlugins={[remarkMath]}
          rehypePlugins={[rehypeKatex]}
          className={path.includes("blogs/") ? "blogpost-leftalign blogpost-container" : ""}
        />
      );
    }
  });

  return (
    <div className={`${name}-blogstyle`}>
      {path.includes("blogs/") && (
        <div className="blog-header">
          <h1>{title}</h1>
          <p className="blog-meta">
            by <a href="/#/me"><b>{author}</b></a> •{" "}
            <span style={{ color: "rgb(161, 161, 161)" }}>{date}</span>
          </p>
        </div>
      )}
      {rendered}
    </div>
  );
};

export default Post;

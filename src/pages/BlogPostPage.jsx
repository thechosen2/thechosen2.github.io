import React from "react";
import { useParams } from "react-router-dom";
import Post from "../components/blogmaker";
import blogMap from "../components/blogmap";

const BlogPostPage = () => {
  const { slug } = useParams();
  console.log(slug);
  const mdPath = blogMap[slug]["path"];
  console.log(mdPath);
  if (!mdPath) {
    return <div>Post not found</div>;
  }

  return (
    <div className="blogpost-container">
      <Post path={mdPath} name={slug} />
    </div>
  );
};

export default BlogPostPage;

import { useEffect, useState } from "react";
import { getAllPosts } from "../../services/postService";
import "./PostLines.css";

export const PostLine = ({ post }) => {
  return (
    <>
      <div className="postDisplay">
        <div className="postTitle">{post.title}</div>
        <div className="postTopic">{post.topic.name}</div>
        <div className="postLikes">&#10084;</div>
      </div>
    </>
  );
};

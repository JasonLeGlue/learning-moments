import { useEffect, useState } from "react";
import { getAllPosts } from "../services/postService";

export const PostLine = ({ post }) => {
    return (
        <>
          <div className="postDisplay">
            <div className="postTitle">{post.title}</div>
            <div className="postTopic">{post.topicId}</div>
            <div className="postLikes">&#65039;</div>  
          </div>  
        </>
    )
}
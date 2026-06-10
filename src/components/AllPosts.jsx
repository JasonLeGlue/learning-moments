import { useState, useEffect } from "react";
import { getAllPosts } from "../services/postService";
import { Navbar } from "./Navbar";
import { PostLine } from "./PostLine";

export const AllPosts = () => {
    
    const [allPosts, setAllPosts] = useState([])

    useEffect(() => {
        getAllPosts().then((postsArray) => {
            setAllPosts(postsArray);
            console.log("posts set");

        });
    }, [])

    return (
        <>
        <Navbar />
        {allPosts.map((postObj) => {
            return <PostLine post={postObj} key={postObj.id} />
        
        })};
            
        </>
    )
}
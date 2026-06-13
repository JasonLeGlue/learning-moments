import { useState, useEffect } from "react";
import { getAllPosts } from "../services/postService";
import { Navbar } from "./Navbar";
import { PostLine } from "./PostLine";
import { TopicFilterBar } from "./TopicFilterBar";
import { getAllTopics } from "../services/topicService";

export const AllPosts = () => {
    
    const [allPosts, setAllPosts] = useState([])
    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        getAllPosts().then((postsArray) => {
            setAllPosts(postsArray);
            console.log("posts set");

        });
    }, [])

    useEffect(() => {
        getAllTopics().then((topicsArray) => {
            setAllTopics(topicsArray);
            console.log("topics set")
        })
    }, [])

    return (
        <>
        <Navbar />
        <TopicFilterBar />
        {allPosts.map((postObj) => {
            return <PostLine post={postObj} key={postObj.id} />
        
        })};
            
        </>
    )
}
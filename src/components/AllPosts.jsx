import { useState, useEffect } from "react";
import { getAllPosts } from "../services/postService";
import { Navbar } from "./Navbar/Navbar";
import { PostLine } from "./PostLine/PostLine";
import { FilterBar } from "./FilterBar/FilterBar.jsx";
import { getAllTopics } from "../services/topicService.js";

export const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
      console.log("posts set");
    });
  }, []);

  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
      console.log("topics set");
    });
  }, []);

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setFilteredPosts(postsArray);
    });
  }, []);

  useEffect(() => {
    const foundPosts = allPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()),
    );
    setFilteredPosts(foundPosts);
  }, [searchTerm]);

  return (
    <>
      <Navbar />
      <FilterBar setSearchTerm={setSearchTerm} />
      {filteredPosts.map((postObj) => {
        return <PostLine post={postObj} key={postObj.id} />;
      })}
      ;
    </>
  );
};

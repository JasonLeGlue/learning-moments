import { useState, useEffect } from "react";
import { getAllPosts } from "../services/postService";
import { Navbar } from "./Navbar/Navbar";
import { PostLine } from "./PostLine/PostLine";
import { FilterBar } from "./FilterBar/FilterBar.jsx";
import { getAllTopics } from "../services/topicService.js";

export const AllPosts = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [allTopics, setAllTopics] = useState([]);
  const [filteredTopic, setFilteredTopic] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("");

  useEffect(() => {
    getAllPosts().then((postsArray) => {
      setAllPosts(postsArray);
      setFilteredPosts(postsArray);
      console.log("posts set");
    });
  }, []);

  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
      setFilteredTopic(topicsArray);
      console.log("topics set");
    });
  }, []);

  useEffect(() => {
    const foundPosts = allPosts.filter(
      (post) =>
        post.title.toLowerCase().includes(searchTerm.toLocaleLowerCase()) &&
        post.topic.id == filteredTopic,
    );
    setFilteredPosts(foundPosts);
  }, [searchTerm, filteredTopic]);

  return (
    <>
      <Navbar />
      <FilterBar
        setFilteredTopic={setFilteredTopic}
        setSearchTerm={setSearchTerm}
      />
      {filteredPosts.map((postObj) => {
        return <PostLine post={postObj} key={postObj.id} />;
      })}
      ;
    </>
  );
};

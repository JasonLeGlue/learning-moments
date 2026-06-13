import { useEffect, useState } from "react";
import { getAllTopics } from "../../services/topicService";
import "./FilterBar.css";

export const FilterBar = ({ setSearchTerm }) => {
  const [allTopics, setAllTopics] = useState([]);

  useEffect(() => {
    getAllTopics().then((topicsArray) => {
      setAllTopics(topicsArray);
      console.log("topics set");
    });
  }, []);

  return (
    <div className="filter-bar">
      <div className="topic-filter-bar">
        <select name="topics" id="topics">
          <option value="0">Select a topic...</option>
          {allTopics.map((topic) => (
            <option value={topic.id} key={topic.id}>
              {topic.name}
            </option>
          ))}
        </select>
      </div>
      <input
        onChange={(event) => {
          setSearchTerm(event.target.value);
        }}
        type="text"
        placeholder="Search Posts"
        className="post-search"
      />
    </div>
  );
};

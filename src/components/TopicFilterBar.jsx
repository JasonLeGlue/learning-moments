import { getAllTopics } from "../services/topicService";
import { useEffect, useState } from "react";


export const TopicFilterBar = () => {

    const [allTopics, setAllTopics] = useState([])

    useEffect(() => {
        getAllTopics().then((topicsArray) => {
            setAllTopics(topicsArray);
            console.log("topics set")
        })
    }, [])


    return <>
        
        <select name="topics" id="topics">
        <option value="0">Select a topic...</option>
        {allTopics.map((topic) => (<option value={topic.id}>{topic.name}</option>))}
        </select>
    </>
}
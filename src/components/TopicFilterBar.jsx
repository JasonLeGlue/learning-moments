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
        <label htmlFor="topics">Choose a topic:</label>
        <select name="topics" id="topics">
        {allTopics.map((topic) => `<option value="${topic.id}>${topic.name}</option>`)}
        </select>
    </>
}
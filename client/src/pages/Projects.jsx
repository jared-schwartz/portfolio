import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects ({}){
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch ("/api/projects");
                if (!response.ok) {
                    throw new Error("Network response was not okay.");
                }
                const jsonData = await response.json();
                setProjects(jsonData);

            } catch (error) {
                console.error("Error fetching data.", error);
            }
        };
        fetchData();
    })
    
    
    return (
        <>
        <div id="project-page">
        <h1>My Projects</h1>
            <ul id="project-catalog">
                {projects.length > 0 ? (
                    projects.map((projects) => (
                        <li key={projects.id}>
                            <p>{projects.name}</p>
                        </li>
                    ))
                ):(
                    <p>No Projects available</p>
                )}
            </ul>
        </div>
        </>
    );
}
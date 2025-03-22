import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Projects ({}){
    const navigate = useNavigate();
    const [projects, setProjects] = useState([]);
    const [error, setError] = useState(null);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("/api/projects");
                if (!response.ok) {
                    throw new Error("Network response was not okay.");
                }
                const jsonData = await response.json();
                setProjects(jsonData);

            } catch (error) {
                setError(error.message);
                console.error("Error fetching data.", error);
            }
        };
        fetchData();
    }, []);
    
    
    return (
        <>
        <div id="project-page">
        <h1>My Projects</h1>
            <ul id="project-catalog">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <li key={project.id} onClick={() => navigate(`/projects/${project.id}`)}>
                            <p id="project-headers">Project Name:</p>
                            <p>{project.project_name}</p>
                            <p id="project-headers">Description:</p>
                            <p>{project.description} </p> 
                            <p id="project-headers">Project Link:</p>
                            <p>{project.link} </p>
                        </li>
                    ))
                ):(
                    <li>No Projects available</li>
                )}
            </ul>
            
        </div>
        </>
    );
}
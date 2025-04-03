import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Admin() {
    const [projectname, setProjectName] = useState("");
    const [projectdescription, setProjectDescription] = useState("");
    const [link, setLink] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [admin, setAdmin] = useState("");
    
    async function handleSubmit(e) {
        e.preventDefault();
        try{
            const response = await fetch("/api/projects",
            {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    projectname,
                    projectdescription, 
                    link,
                }),
            }
            );
            const data = await response.json();
            console.log(data);
            setProjectName("");
            setProjectDescription("");
            setLink("");
            console.log(projectname);
            console.log(projectdescription);
            console.log(link);

        }  catch (error) {
            throw new error("Unable to post project")
        }
    }

    

    return (
        <>
        <div id="admin-header">
        <h1>Admin</h1>
        </div>
        <div id="admin-page">
            <form id="projectForm" onSubmit={handleSubmit}>
                <h3>Add Project</h3>
                <label htmlFor="proj-name">Project Name:</label><br />
                <input 
                type="text" 
                value={projectname} 
                name="proj-name"
                onChange={(e) => setProjectName(e.target.value)} /><br />

                <label htmlFor="desc">Description:</label><br />
                <input 
                type="text" 
                value={projectdescription} 
                name="desc"
                onChange={(e) => setProjectDescription(e.target.value)}
                 /><br />
                
                <label htmlFor="link">Link:</label><br />
                <input 
                type="text" 
                value={link} 
                name="link" 
                onChange={(e) => setLink(e.target.value)}
                /><br />
                <input type="submit" value="Submit" />
            </form>

            <form id="userForm" onSubmit={handleSubmit}>
                <h3>Add User</h3>
                <label>Username:</label><br />
                <input 
                type="text"
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                /><br />
                <label>Password:</label><br />
                <input 
                type="text"
                value={password}
                name="password"
                onChange={(e) => setPassword(e.target.value)}
                /><br />
                <p>Is Admin:</p>
                <label>True</label><br />
                <input 
                type="radio"
                value={admin}
                name="admin-true"
                onChange={(e) => setAdmin(e.target.value)}
                /><br />
                <label>False</label><br />
                <input 
                type="radio"
                value={admin}
                name="admin-false"
                onChange={(e) => setAdmin(e.target.value)}
                /><br />
                

            </form>

        </div>
        </>
    );
}

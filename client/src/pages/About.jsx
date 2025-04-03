import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About ({}){
    
    
    
    return (
        <>
        <div id="about-me">
            <div id="container">
            <h1><u>Jared Schwartz</u></h1>
                    <h3>
                    Pineville, LA<br />
                    262-327-1070<br />
                    jareds1070@gmail.com<br />
                    linkedin.com/in/jaredschwartz1070<br />
                    github.com/jared-schwartz<br />
                    
                    </h3>
                    <h1><b><u>Technical Skills</u></b></h1>
                    <p>JavaScript | React.js | HTML/CSS | Node.js | Git | REST APIs | Agile Development | PSQL | Web Development |
                    Customer Relationship Management | Problem Solving</p>
                    <div id="info-me">
                        <a>
                        I'm a passionate web developer with a strong foundation 
                        in HTML and JavaScript. I have hands-on experience 
                        troubleshooting issues and ensuring customer satisfaction. 
                        I thrive in fast-paced environments, while prioritizing my 
                        tasks while maintaining high-quality work. My background 
                        in machinery and the automotive industry has sharpened my 
                        technical skills, which I now apply to frontend development, backend development 
                        and software engineering overall.
                        </a>
                    </div>
            </div>
                    <h1><u>Professional Experience</u></h1>
                        <div id="professional-experience-1">
                            <h2>Grainger, On-site Service Representative</h2>
                            <a>May 2023 - Present</a>
                            <ul>
                                <li>Built and maintained strong customer relationships to understand business needs and provide tailored solutions, resulting in increased loyalty and repeat sales.</li>
                                <li>Developed and executed sales strategies to consistently achieve or exceed sales quotas.</li>
                                <li>Delivered exceptional service by resolving client issues and ensuring timely product delivery.</li>
                                <li>Utilized CRM tools to track sales activities, analyze performance metrics, and identify growth opportunities.</li>
                            </ul>
                        </div>

                        <div id="professional-experience-2">
                            <h2>AutoZone, Assistant Store Manager</h2>
                            <a>July 2021 - May 2023</a>
                            <ul>
                                <li>Guided customers in selecting automotive parts, leveraging extensive product knowledge to improve satisfaction.</li>
                                <li>Streamlined operations by efficiently managing inventory, planograms, and cycle counts.</li>
                                <li>Trained new employees on sales techniques and product knowledge, driving improved store performance.</li>
                                <li>Coordinated timely service deliveries to commercial shops, fostering strong business relationships.</li>
                            </ul>
                        </div>

                        <div id="professional-experience-3">
                            <h2>Walker Automotive Toyota, Express Technician</h2>
                            <a>May 2023 - Present</a>
                            <ul>
                                <li>Performed efficient oil changes, tire rotations, and battery services to ensure customer satisfaction.</li>
                                <li>Executed coolant and fuel induction services, improving vehicle performance and reliability.</li>
                                <li>Collaborated with team members to maintain a safe and organized workspace during peak hours.</li>
                            </ul>
                        </div>
        </div>
        </>
    )
}
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function About ({}){
    
    
    
    return (
        <>
        <div id="about-me">
        <h1>About Me</h1>
            <div id="container">
                <img src="/my_photo.jpg" alt="My photo" width="35%" />
                    <div id="info-me">
                        <a>
                        I am a results-driven professional with a strong foundation in web 
                        development, specializing in HTML and JavaScript, complemented 
                        by hands-on experience in troubleshooting and customer 
                        satisfaction. Proven ability to manage multiple tasks effectively 
                        while delivering high-quality service in fast-paced environments. 
                        Proficent at leveraging technical skills from previous roles in machinery 
                        and automotive industries to excel as a Frontend Developer or Software 
                        Engineer.</a>
                    </div>
            </div>
                    <h1>Professional Experience</h1>
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
import React, { Component } from "react";
import ResumeContent from "./Resume.json";

export default class Resume extends Component {
    render = () => {
        const careerSummary = ResumeContent["Career Summary"].map((summary) => {
            return (
                <li>{summary}</li>
            );
        });
        const apps = ResumeContent["Applications Built"].map((app) => {
            return (<div className={app.title}>
                <h3>{app.title}</h3>
                <p>{app.description}</p>
                <p>{"Tech: " + app.tech}</p>
                <p><a href={app.links.url}>Application</a></p>
                <p><a href={app.links.github}>GitHub</a></p>
            </div>);
        });

        const experience = ResumeContent["Professional Experience"].map((profExp) => {
            return (<div className={profExp.tenure}>
                <h4><strong>{profExp.company}</strong></h4>
                <h4><strong>{profExp.role}</strong></h4>
                <h4><strong>{profExp.project}</strong></h4>
                <ul>{profExp.description.map((item) => {
                    return (
                        <li>{item}</li>
                    );
                })}</ul>
            </div>);
        });
        const edu = ResumeContent["Certifications and Education"].map((edu) => {
            return (<div className={edu.year}>
                <p>{edu.cert}</p>
                <p>{edu.year}</p>
                <p>{edu.course}</p>
            </div>);
        });
        const skills = ResumeContent.skills.map((skills) => {
            return (<div className={skills.type}>
                <p><strong>{skills.type}</strong></p>
                <ul>{skills.skills.map((item) => {
                    return (
                        <li>{item}</li>
                    );
                })}</ul>
            </div>);
        });
        return (
            <div className="container">
                <div className="row">
                    {/* Render and display name, title  */}
                    <div className="col-sm-8">
                        <h2><center>{ResumeContent.name}</center></h2>
                        <h4><center>{ResumeContent.title}</center></h4>
                    </div>
                    {/* render contact details */}
                    <div className="col-sm-4">
                        <br />
                        <h5>{ResumeContent.location}</h5>
                        <h5>{ResumeContent.phoneNum}</h5>
                        <h5>{ResumeContent.email}</h5>
                    </div>
                {/* thematic break using hr tag */}
                <div className="col-sm-12">
                    <hr />
                </div>
                {/* render career summary heading and content */}
                <div className="col-sm-8">
                    <h3>{Object.keys(ResumeContent)[5]}</h3>
                    <ul className="summary">
                        {careerSummary}
                    </ul>
                {/* apps built heading and content */}
                    <h3>{Object.keys(ResumeContent)[6]}</h3>
                    {apps}
                {/* render professional experience */}
                    <h3>{Object.keys(ResumeContent)[7]}</h3>
                    {experience}
                {/* education and certifications */}
                    <h3>{Object.keys(ResumeContent)[8]}</h3>
                    {edu}
                    </div>
                 {/* render tech skills */}
                 <div className="col-sm-4">
                 <h3>{Object.keys(ResumeContent)[9]}</h3>
                 {skills}
                    </div>


                 {/* <div className="col-sm-4">
                 <h4>Skills</h4>
                 <h5>Programming Languages:</h5>
                 <ul>   
                     <li>HTML/CSS</li>
                     <li>JavaScript/ES6</li>
                     <li>Java</li>
                     <li>SQL</li>
                 </ul>
                 <h5>Libraries and Frameworks:</h5>
                 <ul>   
                     <li>React.js</li>
                     <li>Node.js/Express.js</li>
                     <li>JQuery</li>
                 </ul>
                 <h5>Version Control:</h5>
                 <ul>   
                     <li>Git</li>
                 </ul>
                 <h5>Other:</h5>
                 <ul>   
                     <li>API/Async</li>
                     <li>REST</li>
                     <li>MVC</li>
                 </ul>
                 </div> */}
            </div>
            </div>)

    }
}

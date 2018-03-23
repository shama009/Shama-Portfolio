import React, { Component } from "react";
import ResumeContent from "./Resume.json";

export default class Resume extends Component {
    render = () => {
        //let careerSummary = [ResumeContent.item1, ResumeContent.item, ResumeContent.item3, ResumeContent.item4]
        //console.log(careerSummary);
        const careerSummary = ResumeContent["Career Summary"].map((summary) => {
            return (
                <li>{summary}</li>
            );
        });
        const apps = ResumeContent["Applications Built"].map((app) => {
            return (<div className={app.title}>
                <h4><strong>{app.title}</strong></h4>
                <p>{app.description}</p>
                <p>{"Tech: "+app.tech}</p>
                <p><a href={app.links.url}>Application</a></p>
                <p><a href={app.links.github}>GitHub</a></p>
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
                </div>
                {/* render tech skills */}
                <div className="col-sm-4">
                    {"skills"}
                </div>
                {/* apps built heading and content */}
                <div className="col-sm-8">
                    <h3>{Object.keys(ResumeContent)[7]}</h3>
                    {apps}
                </div>
                <div className="col-sm-4"></div>
                {/* render professional experience */}
                <div className="col-sm-8">
                <h3>{Object.keys(ResumeContent)[8]}</h3>
                    {"prof experience"}
                </div>
                <div className="col-sm-4"></div>
                {/* education and certifications */}
                <div className="col-sm-8"></div>
                <div className="col-sm-4"></div>
            </div>)

    }
}

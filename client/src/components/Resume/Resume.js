import React, { Component } from "react";
import ResumeContent from "./Resume.json";

export default class Resume extends Component {
    render = () => {
        //let careerSummary = [ResumeContent.item1, ResumeContent.item, ResumeContent.item3, ResumeContent.item4]
        //console.log(careerSummary);
        const careerSummary = ResumeContent["Career Summary"].map((summary)=> {
            return(
                <li>{summary}</li>
            );
        });
        const apps = ResumeContent["Applications Built"].map((app) => {
         return(   <div>
            <h4><strong>{app.title}</strong></h4>
            </div>);
        });
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>{ResumeContent.name}</h2>
                        <h4>{ResumeContent.title}</h4>
                    </div>
                    <div className="col-sm-4">
                        <br />
                        <h5>{ResumeContent.location}</h5>
                        <h5>{ResumeContent.phoneNum}</h5>
                        <h5>{ResumeContent.email}</h5>
                    </div>
                </div>
                <div className="col-sm-12">
                    <hr />
                </div>
                <div className="col-sm-8">
                    <h3>{Object.keys(ResumeContent)[5]}</h3>
                    <ul className = "summary">
                        {careerSummary}
                    </ul>
                </div>
                <div className="col-sm-4">
                {"skills"}
                </div>
                <div className="col-sm-8">
                <h3>{Object.keys(ResumeContent)[6]}</h3>
                <ul>
            {apps}
                    </ul>
                </div>
            </div>)

    }
}

import React, { Component } from "react";
import ResumeContent from "./Resume.json";

export default class Resume extends Component {
    render = () => {
        //let careerSummary = [ResumeContent.item1, ResumeContent.item, ResumeContent.item3, ResumeContent.item4]
        //console.log(careerSummary);
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
                    <ul>
                        <li className="summary">{ResumeContent["Career Summary"].item1}</li>
                        <li className="summary">{ResumeContent["Career Summary"].item2}</li>
                        <li className="summary">{ResumeContent["Career Summary"].item3}</li>
                        <li className="summary">{ResumeContent["Career Summary"].item4}</li>
                    </ul>
                </div>
                <div className="col-sm-4">
                {"skills"}
                </div>
                <div className="col-sm-8">
                <h3>{Object.keys(ResumeContent)[6]}</h3>
                
                </div>
            </div>)

    }
}

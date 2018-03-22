import React, { Component } from "react";
import ResumeContent from "./Resume.json";

export default class Resume extends Component {
    render = () => {
        let resume = ResumeContent.map(data => {
            return (
                <div className="container">
                    <div className="row">
                        <div className = "col-sm-8">
                        <h2>{data.name}</h2>
                        <h3>{data.title}</h3>
                        </div>
                        <div className = "col-sm-4">
                        <br />
                        <h5>{data.location}</h5>
                        <h5>{data.phoneNum}</h5>
                        <h5>{data.email}</h5>
                        </div>
                    </div>
                    <div className="col-sm-12">
                    <hr />
                    </div>
                    <div className="col-sm-8">
                    
                    </div>
                </div>)
        })
        return (
            <div className="container">
                <div className="row">
                    {resume}
                </div>
            </div>
        )

    }
}

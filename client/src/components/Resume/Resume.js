import React, { Component } from "react";
import ResumeContent from "./Resume.json";

export default class Resume extends Component {
    render = () => {
        let resume = ResumeContent.map(data => {
            return (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-8">
                        <h1>{data.name}</h1>
                        </div>
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

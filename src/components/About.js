import React from "react";
import "./styles/About.css";

const About=()=>{
    return(
        <>
            <div className="aboutMain">
                <div className="info">
                    <h1 className="aboutName">Hira R.</h1>
                    <p>UX/UI Designer</p>
                </div>
                <div className="data">
                    <div className="project">
                        <h3>125</h3>
                        <p>Projects</p>
                    </div>
                    <div className="revenue">
                        <h3>$124</h3>
                        <p>Revenue</p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default About;
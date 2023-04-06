import React from "react";
import './styles/Greating.css'

const Greating=()=>{
    return(
        <>
            <div className="greatingMain">
                <div className="image">
                    <img src="/image/red-flag.png" alt="image1"></img>
                </div>
                <div className="content">
                    <h1>Dear Client</h1>
                    <p>Join our online community. It helps In managing your projects</p>
                </div>
            </div>
        </>
    )
}

export default Greating;
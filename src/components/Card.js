import React from "react";

const Card=(props)=>{
    return(
        <>
            <div className="cardMain">
                <div className="cardHeading">
                    <h1>{props.heading}</h1>
                    <p>{props.para}</p>
                </div>
                <div className="cardPeople">
                    <p>Seen by</p>
                    
                </div>
            </div>
        </>
    )
}

export default Card;
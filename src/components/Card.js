import React from "react";
import { FcPortraitMode } from "react-icons/fc";
import Button from '@mui/material/Button';
import "./styles/Card.css"


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
                    <div className="cardPeopleBack">
                        <FcPortraitMode />
                    </div>
                </div>
                <div className="buttonGrp1">
                    <div className="button1">
                        <Button variant="contained"  className="b1">Tour</Button>
                    </div>
                    <div className="button1">
                        <Button variant="contained" >Trip</Button>
                    </div>
                </div>
                <div className="buttonGrp2">
                    <Button variant="contained" size="small">Transport</Button>
                </div>
            </div>
        </>
    )
}

export default Card;
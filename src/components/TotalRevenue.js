import React from "react";
import { AiFillDollarCircle } from "react-icons/ai";
import LinearProgress from '@mui/material/LinearProgress';
import "./styles/Total.css";



const TotalRevenue=()=>{
    return(
        <>
            <div className="totalMain">
                <div className="totalLogo">
                    <AiFillDollarCircle className="totalIcon"/>                
                </div>
                <div className="innerRow">
                    <div className="totalHeading">
                        <p>Total Revenue</p>
                        <h2>$92,983</h2>
                    </div>
                    <div className="statusBar">
                    <LinearProgress variant="determinate" value={80} />
                    </div>

                </div>
            </div>
        </>
    )
}

export default TotalRevenue;
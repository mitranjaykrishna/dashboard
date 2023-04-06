import React from "react";
import "./styles/ProjectDetail.css";
import LinearProgress from '@mui/material/LinearProgress';

const ProjectDetail=()=>{
    return(
        <>
            <div className="projectDetailMain">
                <div className="infoProject">
                    <p>Project Detail</p>
                    <h1 className="aboutName">Hira R.</h1>
                    <p>UX/UI Designer</p>
                </div>
                <div className="dataProject">
                    <div className="projectPro">
                        <h3>Project Progress</h3>
                        <h4>75%</h4>
                        <LinearProgress variant="determinate" value={75} className="statusBarPro" />                        
                    </div>

                </div>
            </div>
        </>
    )
}

export default ProjectDetail;
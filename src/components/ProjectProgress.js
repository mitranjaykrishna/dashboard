import React from "react";
import "./styles/ProjectProgress.css";
// import LinearProgress from '@mui/material/LinearProgress';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProjectProgress=()=>{
    return(
        <>
            <div className="projectProgressMain">
                <div className="infoProjectProgress">
                    <p>Project Progress</p>
                </div>
                <div className="dataProjectProgress">
                    <div>
                        <div className="cr">
                            <CircularProgressbar value={75} text="75%" background='true' styles={{
                                // Customize the root svg element
                                root: {},
                                // Customize the path, i.e. the "completed progress"
                                path: {
                                // Path color
                                stroke: `blueviolet`,
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Customize transition animation
                                transition: 'stroke-dashoffset 0.5s ease 0s',
                                // Rotate the path
                                transform: 'rotate(1turn)',
                                transformOrigin: 'center center',
                                },
                                // Customize the circle behind the path, i.e. the "total progress"
                                trail: {
                                // Trail color
                                stroke: 'rgb(115, 119, 118)',
                                // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                                strokeLinecap: 'butt',
                                // Rotate the trail
                                transform: 'rotate(0.25turn)',
                                transformOrigin: 'center center',
                                },
                                // Customize the text
                                text: {
                                // Text color
                                fill: 'white',
                                // Text size
                                fontSize: '16px',
                                },
                                // Customize background - only used when the `background` prop is true
                                background: {
                                fill: 'rgb(228, 40, 40)',
                                fonSize: '5rem',
                                },
                            }}/>
                            <p>3 Remaining Projects</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProjectProgress;
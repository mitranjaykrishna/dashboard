import React from "react";
import FolderOpenOutlinedIcon from '@mui/icons-material/FolderOpenOutlined';
import "./styles/Dashboard.css"
import { CgMail } from 'react-icons/cg';
import { SlCalender } from 'react-icons/sl';
import { GoGraph } from 'react-icons/go';
import { FaWpforms } from 'react-icons/fa';

const Dashboard=()=>{
    return (
    <>
        <div className="dashMain">
            <div className="dashTop">
                <div className="logo">
                    <FolderOpenOutlinedIcon className="icon" />                    
                </div>
                <div className="heading">
                    <h1>Dashboard</h1>
                </div>
                
            </div>
            <div className="dashOther">
                
                    <div className="logo1">
                        <CgMail className="icon1" />
                    </div>
                    <div className="heading1">
                        <h3 >Email</h3>
                    </div>
            </div>
            <div className="dashOther">
                    <div className="logo1">
                    <SlCalender className="icon1" />
                    </div>
                    <div className="heading1">
                    <h3>Calender</h3>
                    </div>
            </div>
            <div className="dashOther">
                
                    <div className="logo1">
                        <GoGraph className="icon1" />
                    </div>
                    <div className="heading1">
                        <h3>Graph</h3>
                    </div>
                
            </div>
            <div className="dashOther">
                
                    <div className="logo1">
                        <FaWpforms className="icon1" />
                    </div>
                    <div className="heading1">
                        <h3>Forms</h3>
                    </div>
                
            </div>
        </div>
        
    </>
    )
}

export default Dashboard;
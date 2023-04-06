import React from "react";
import Switch from '@mui/material/Switch';
import './styles/Slot.css';
import SlotCalender from "./SlotCalender";
const label = { inputProps: { 'aria-label': 'Switch demo' } };


const Slot=()=>{
    return (
        <>
        <div className="slotMain">
            <div className="slotTop">
                <div className="t1">
                    <h1>Free Slots Available</h1>
                </div>
                <div className="t2">
                <Switch {...label} defaultChecked />
                </div>
            </div>

            <div>
                <div className="slotCol">
                    <div>
                        <SlotCalender date='12' month='June' />
                    </div>
                    <div>
                        <SlotCalender date='18' month='June' />
                    </div>
                    <div>
                        <SlotCalender date='20' month='June' />
                    </div>
                    
                </div>
            </div>   
            <div>
                <div className="slotCol">
                    <div>
                        <SlotCalender date='02' month='July' />
                    </div>
                    <div>
                        <SlotCalender date='10' month='July' />
                    </div>
                    <div>
                        <SlotCalender date='15' month='July' />
                    </div>
                    
                </div>
            </div>        
        </div>

        </>
    )
}



export default Slot;

import React from 'react';


const SlotCalender=(props)=>{
    return(
        <>
            <div className={(props.backe)?'back':'scMain'}>
                
                    <h1>{props.date}</h1>
                    <p>{props.month}</p>
                
            </div>
        </>
    )
}

export default SlotCalender;
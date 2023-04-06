import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import './styles/Transaction.css';

const TransactionDetail=()=>{
    return(
        <>
        <div className="transactionMain">
            <div className="transactionRow1">
                <div className="transactionRow1Col1">
                    <h1>Transaction Detail</h1>
                    <p> Hi Hira</p>
                </div>                
                <div className="transactionRow1Col2">
                <img src="/image/picture.jpeg" alt="imag"></img>
                </div>
            </div>

            
            <div className="transactionRow1">
                <div className="transactionRow1Col1">
                <h1>$4,763.40</h1>
                <p>Available Balance</p>
                </div>                
                <div className="transactionRow1Col2">
                <p><span>.... </span>3863</p>
                </div>
            </div>

            <div className="transactionRow3">
                <div className="transactionRow3Arrow">
                    <BsArrowRight className="arrow"/>
                </div>
                {/* <div>
                    <img src="/image/img1.jpeg" alt="image1"></img>
                </div> */}
            </div>
            <div className="transactionSend">
                <div>
                    <Button variant="danger" >Send</Button>
                </div>
            </div>
        </div>

        </>
    )
}

export default TransactionDetail;
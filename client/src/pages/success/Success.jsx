import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import newRequest from '../../utils/newRequest.js'
import './Success.scss'

function Success() {

  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const payment_intent = params.get("payment_intent")
  const navigate = useNavigate();

  console.log(payment_intent)

  useEffect(() => {
    const makeRequest = async () => {
      try{
        console.log("hi ....");
        await newRequest.put("/orders", { payment_intent });
        setTimeout(() => {
          navigate("/orders")
        }, 4000)
      }catch(err){
        // console.log("errrrrr ....");
        console.log(err);
      }
    }
    makeRequest();
  },[])
    
  return (
    <div className="success">
        Payment successful. You are being redirected to the orders page. Please do
        not close the page
    </div>
  )
}

export default Success

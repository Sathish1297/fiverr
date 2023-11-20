import React, { useEffect, useState } from 'react'
import './Pay.scss'
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import newRequest from '../../utils/newRequest';
import CheckoutForm from '../../components/checkoutForm/CheckoutForm';
import {useParams} from 'react-router-dom'

const stripePromise = loadStripe("pk_test_51ODozvSI7FhVL7a6k5L3UHIIsr3rghrjegSg8dyse7FDkhsnhESODJJ7RpVGj3Vx0bQj4h5Sai2XkaRnXSvRmpTh00Ch02ZSBt");

function Pay() {
    const [clientSecret, setClientSecret] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const makeRequest = async () => {
            try{
                const res = await newRequest.post(`/orders/create-payment-intent/${id}`);
                setClientSecret(res.data.clientSecret);
            }catch(err){
                console.log(err);
            }
        };
        makeRequest();
    }, [])
    
    const appearance = {
        theme: 'stripe',
      };
      const options = {
        clientSecret,
        appearance,
      };

  return (
    <div className='pay'>
        {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
        )}
    </div>
  )
}

export default Pay
import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import CheckoutProducts from './CheckoutProducts';
import './Payment.css';
import CurrencyFormat from "react-currency-format"
import { getBasketTotal } from './reducer';
import { useStateValue } from './StateProvider';
import {CardElement, useStripe, useElements} from "@stripe/react-stripe-js"

function Payment() {
    const [{basket,user},dispatch] = useStateValue();

    const [error,setError] = useState(null);
    const [disabled,setDisabled] = useState(true);
    const [succeeded,setSucceded] = useState(false)
    const [processing,setProcessing] = useState("");
    const [clientSecret,setClientSecret] = useState(true);

    useEffect(() => {
        //generate the special stripe secret
        //which alows us to charge the customer
        const getClientSecret = async () => {
            const response = await axios(
                {
                    method : 'post',
                    //Stripe expects the total in  a currencies sub unit
                    url:`/payments/create?total=${getBasketTotal(basket) * 100}`
            
            });
            setClientSecret(response.data.clientSecret)
        }


        getClientSecret();
    }, [basket])

    const stripe  = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) =>{
        //do all stripe functions
        event.preventDefault();
        setProcessing(true);


        const payload = await stripe.confirmCardPayment(clientSecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent})=>{
            //payment intent = payment confirmation
            setSucceded(true)
            setError(null)
            setProcessing(false)
            history.replace('/orders')
        })
    }

    const handleChange = event=>{
        setDisabled(event.empty)
        setError(event.error ? event.error.message :"");  

    }
    return (
        <div className="payment">
            <div className="payment__container">
                <h1>
                    Checkout (
                        <Link to="/checkout">
                        {basket?.length} items </Link>
                    )
                </h1>
                {/* Payment Section  delivery address*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>
                            Delivery Address
                        </h3>
                    </div>

                    <div className="payment__address">
                        <p>
                            {user?.email}

                        </p>
                        <p>
                            123 React Lane,
                
                        </p>
                        <p>
                            Arduino puraya
                        </p>
                    </div>
                </div>
                {/* Payment Section  Review items*/}
                <div className="payment__section">
                    <div className="payment__title">
                        <h3>Review Items and Delivery</h3>
                    </div>
                    <div className="payment__items">
                        {basket.map(i=>(
                            <CheckoutProducts
                                id={i.id}
                                title={i.title}
                                image={i.image}
                                price={i.price}
                                rating={i.rating}
                            />
                        ))}
                    </div>
                </div>
                {/* Payment Section  payment method*/}
                <div className="payment__section">
                        <div className="payment__title">
                            <h3>payment Method</h3>
                        </div>

                        <div className="payment__details">
                            {/* stripe here */}
                            <form onSubmit={handleSubmit}>
                                <CardElement onChange={handleChange}/>
                                <div className="payment__container">
                                    <CurrencyFormat
                                        renderText={(value) =>(
                                            <>
                                                <h3>Order Total: {value}</h3>
                                            </>

                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    
                                    />
                                    <button disabled={processing ||disabled || succeeded}>
                                        <span>{processing ? <p>Processing</p>:"Buy Now"}</span>
                                    </button>
                                </div>
                                {/* Error */}
                                {error && <div>{error}</div>}
                            </form>


                        </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

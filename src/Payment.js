import React from 'react'
import { Link } from 'react-router-dom';
import CheckoutProducts from './CheckoutProducts';
import './Payment.css';
import { useStateValue } from './StateProvider';

function Payment() {
    const [{basket,user},dispatch] = useStateValue();
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
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Payment

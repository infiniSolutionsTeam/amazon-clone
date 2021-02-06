import React from 'react'
import './Checkout.css'
import Subtotal from './Subtotal'
import { useStateValue } from './StateProvider';
import CheckoutProducts from './CheckoutProducts';

function Checkout() {
    const [{basket},dispatch] = useStateValue();
    var x = JSON.stringify(basket);
    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://wordstream-files-prod.s3.amazonaws.com/s3fs-public/styles/simple_image/public/images/media/images/banner-ads-examples-aws.jpg?jwAuTeoLXQvDzDNGQ8Q3zDmWXndEqL8V&itok=tukEXkYJ" alt="" className="checkout__ad"/>


                <div>
                    <h2 className="checkout__title">
                        Your Shopping Cart
                    </h2>
                    {basket.map(i=>(
                        <CheckoutProducts 
                            id={i.id}
                            title={i.title}
                            image={i.image}
                            price={i.price}
                            rating={i.rating}    
                        />
                    ))}
                    {/* basket item */}
                    {/* basket item */}
                    {/* basket item */}
                </div>
            </div>

            <div className="checkout__right">
                <Subtotal/>
            </div>

        </div>
    )
}

export default Checkout

import React from 'react'
import './CheckoutProducts.css'
import GradeIcon from '@material-ui/icons/Grade';
import { useStateValue } from './StateProvider';

function CheckoutProducts({id,image,title,price,rating}) {
    const [{basket},dispatch] = useStateValue();
    const removeFromBasket = ()=>{
        //remove the item from the basket
        dispatch({
            type:'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className="checkoutProducts">
            <img className='checkoutProduct__image' src={image}/>

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                        .fill()
                        .map((_,i)=>(
                            <GradeIcon/>
                        ))
                    }
                </div>
                <button onClick={removeFromBasket}>
                    Remove from Basket
                </button>
            </div>
        </div>
    )
}

export default CheckoutProducts

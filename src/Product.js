import React from 'react'
import './Product.css'
import GradeIcon from '@material-ui/icons/Grade';
import { useStateValue } from './StateProvider';
function Product({id,title,image,price,rating}) {

    const [{basket},dispatch] = useStateValue();

    console.log('this is the basket >>> ',basket);
    const addToBasket = () => {
        //dispatch the item into the data layer
        dispatch({
            type:'ADD_TO_BASKET',
            item:{
                id:id,
                title:title,
                image:image,
                price:price,
                rating:rating,
            },
        });
    };

    return (
        <div className="product">
            <p className="product__info">{title}</p>
            <p className="product__price">
                <samll>$</samll>
                <strong>{price}</strong>
            </p>
            <div className="product__rating">
                {
                    Array(rating).fill().map((_,i) => (
                        <GradeIcon/>
                    ))
                }
            </div>
            <img  src={image} />
            <button onClick={addToBasket}>Add to Cart</button>
        </div>
    )
}

export default Product

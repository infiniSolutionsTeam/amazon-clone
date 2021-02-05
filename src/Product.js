import React from 'react'
import './Product.css'
import GradeIcon from '@material-ui/icons/Grade';
function Product({id,title,image,price,rating}) {
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
            <button>Add to Cart</button>
        </div>
    )
}

export default Product

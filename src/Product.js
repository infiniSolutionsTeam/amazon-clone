import React from 'react'
import './Product.css'
import GradeIcon from '@material-ui/icons/Grade';
function Product() {
    return (
        <div className="product">
            <p className="product__info">the lean startup</p>
            <p className="product__price">
                <samll>$</samll>
                <strong>19.99</strong>
            </p>
            <div className="product__rating">
                <GradeIcon/>
                <GradeIcon/>
                <GradeIcon/>
                <GradeIcon/>
                <GradeIcon/>
            </div>
            <img  src="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" />
            <button>Add to Cart</button>
        </div>
    )
}

export default Product

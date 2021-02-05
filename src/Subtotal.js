import { ShoppingBasket } from '@material-ui/icons'
import React from 'react'
import CurrencyFormat from "react-currency-format"
import './Subtotal.css'

function Subtotal() {
    return (
        <div className="subTotal">
            <CurrencyFormat
                renderText={(value) =>(
                    <>
                        <p>
                            Subtotal (0 items):<strong>100000</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox"/>This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={100000}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal

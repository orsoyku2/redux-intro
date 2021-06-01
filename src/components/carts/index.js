import React from 'react'
import {connect} from 'react-redux'

const Carts = (props) => {
    const totalPrice = props.cart.reduce((total,val)=> (total +=val.price),0);
    return (
        <div>
            <h2>Total price {totalPrice.toFixed(2)}</h2>
            <ul>
            {props.cart.map((cart)=> (
                <li>{cart.name}  {cart.price}tl</li>
            ))}
            </ul>
        </div>
    )
}
const mapStateToProps = state => {
    return {
        cart:state.cart
    }

} 
export default connect(mapStateToProps)(Carts);

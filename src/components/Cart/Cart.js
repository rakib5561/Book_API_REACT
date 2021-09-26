import React from 'react';
import('./Cart.css')

const Cart = (props) => {
    
    const {cart} =props;
    let total = 0;
    
    for(const book of cart){
        total = total + book.price;
    }

    return (
        <div className="cart-style">
            <h2>Book added : {props.cart.length}</h2>
            <h3>Total Price : {total}</h3>  
            {
                cart.map(bok => <p>{bok.name}</p>)
            } 

        </div>
    );
};

export default Cart;
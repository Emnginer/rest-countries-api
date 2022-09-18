import React from 'react';

const Cart = (props) => {
    const cart = props.cart

    let populations = 0;
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        populations = populations + element.population; 
        
    }

    return (
        <div>
            <h3>Country Added: {cart.length}</h3>
            <h3>Population: {populations}</h3>  
        </div>
    );
};

export default Cart;    
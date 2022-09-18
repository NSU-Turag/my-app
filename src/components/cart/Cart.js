import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    const totalPrice = (cart.reduce((total, prd) => total + prd.price, 0));
    let shipping = 0;
    if (totalPrice === 0)
        shipping = 0;
    else if (totalPrice < 15)
        shipping = 12.99;
    else if (totalPrice > 35)
        shipping = 0;
    else if (totalPrice >= 15) {
        shipping = 4.99;
    }
    

    const tax=(totalPrice*.1).toFixed(2);
    const total=(totalPrice + shipping+tax)
    return (
        <div>
            <h4>Order Summery</h4>
            <p>Items orderesd: {cart.length}</p>
            <p>Shipping cost: {shipping}</p>
            <p>Tax: {tax}</p>
            <p>Total price: {total}</p>

        </div>
    );
};

export default Cart;
import React from 'react';
import { useState } from 'react';
import fakeData from '../../fakeData'
import Cart from '../cart/Cart';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
    const [products, setProducts] = useState(first10)
    const [cart, setCart]= useState([])
    const handelAddProduct = (product) => {
        const newCart=[...cart, product];
        setCart(newCart)
    }
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(prod =>
                        <Product 
                        product={prod}
                        handelAddProduct={handelAddProduct}
                        ></Product>
                    )
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>

        </div>
    );
};

export default Shop;
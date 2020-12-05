import react from 'react';
import Header from '../auth/components/Header';
import CartList from './components/CartList';
import './styles/cart.css';
import Checkout from './components/Checkout';

const Cart = () => {


    return(
        <>
        <Header/>
        <div className = 'cart__container'>
            <CartList/>
            <Checkout/>
        </div>
        </>
    )
}

export default Cart;
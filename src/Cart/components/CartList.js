import react from 'react';
import CartItem from './CartItem';
import { useSelector } from 'react-redux';

const CartList = () => {

    const cartitems = useSelector(state => state.CartReducerState.items);
    let indicator;
    if( cartitems.length > 0 ){
        indicator = true;
    }
    else{
        indicator = false;
    }

    return(
        <>
        <div className = 'cart__list'>
        <h3>My Cart</h3>
        {
            indicator ? cartitems.map(item => <CartItem data = {item}/>) : <h1> Cart is Empty</h1>
        }    
        </div>
        </>
    )
}

export default CartList;
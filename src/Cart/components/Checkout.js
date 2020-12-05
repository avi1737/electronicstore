import { Button } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux'

function Checkout() {

    const total = useSelector( state => state.CartReducerState.total);
    const cartitems = useSelector( state => state.CartReducerState.items);
    return (
        <>
        <div className = 'cart__checkout'>
        <h1 className = 'cart__checkout__heading'>Price Details</h1>
        <h2>Price ({cartitems.length}) items</h2>  
        <h2> Total : {total}</h2>
        <Button variant = 'contained' color='primary'>Checkout</Button>
        </div>
        </>
    )
}

export default Checkout

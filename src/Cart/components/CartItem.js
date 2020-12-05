import React from 'react'

export default function CartItem(props) {

    const { calc,price,qty,image,title} = props.data;
    return (
        <>
        <div className = 'cart__item'>
            <div className = 'cart__image__container'>
                <img src = {image} alt = {image} width = '100%' height = '100%'/>
            </div>
            <div className = 'cart__item__content'>
            <h3>{title}</h3>
            <h3>Quantity: {qty}</h3>
            <h2>{price}</h2>
            <h2>For {qty} units = {calc} Rs</h2>
            </div>
        </div>
        </>
    )
}

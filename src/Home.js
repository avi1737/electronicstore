import { Card, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import OurCorosel from './auth/components/Carousel';
import Header from './auth/components/Header';
import { get_products } from './Products/actions/actions';
import Product from './Products/components/product';
import '../src/auth/styles/home.css';

const Home = () => {

    const dispatch = useDispatch();
    const products = useSelector( state => state.ProductReducerState.products);

    useEffect(() => {
        dispatch(get_products());
    },[]);

    return(
        <>
        <Header heading = { "Croma" } />
        <div className = 'products__container'>
        {
            products.map(product => <Product data = {product}/>)
        }
        </div>
        </>
    )
}

export default Home;
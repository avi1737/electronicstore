import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import Header from '../../auth/components/Header'
import { get_unique_product } from '../actions/actions';
import SingleProduct from '../components/singleProduct'

export default function UniqueProduct() {

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_unique_product(id));
    }, []);

    const product_obj = useSelector( state => state.ProductReducerState.unique_product);

    return (
        <>
        <Header/>
        <SingleProduct product = {product_obj}/>
        </>
    )
}

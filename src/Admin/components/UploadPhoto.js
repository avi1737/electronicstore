import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_products, get_product_fail } from '../../Products/actions/actions';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { Link, useRouteMatch } from 'react-router-dom';

const UploadPhotos = () => {

    const dispatch = useDispatch();
    let { path, url} = useRouteMatch();

    useEffect(() => {
        dispatch(get_products());
    },[])

    const products = useSelector( state => state.ProductReducerState.products);

    console.log(products);
    return(
        <>
        <Typography variant = "h4">Products</Typography>
        <Table>
        <TableHead>
          <TableRow>
            <TableCell align ="left"><Typography variant = "h6">Id</Typography></TableCell>
            <TableCell align="left">Title</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Uploads</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            {
                products.map( product => <TableRow>
                    <TableCell align = "left">{product.id}</TableCell>
                    <TableCell align = "left"><Typography>{product.title}</Typography></TableCell>
                    <TableCell align = "left"><Typography variant = 'h6'>{product.price}</Typography></TableCell>
                    <TableCell align = "left"><Link to = {`${url}/`+product.id} >Upload Phooto</Link></TableCell>
                </TableRow>)
            }
        </TableBody>
        </Table>
        </>
    )
}

export default UploadPhotos;
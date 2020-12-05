import { Button } from '@material-ui/core';
import react from 'react';
import '../styles/singleProduct.css';

const SingleProduct = (props) => {

    const { title,description,price,discount,image} = props.product;
    return(
        <>
        <div className = 'single__product__container'>
            <div className = 'image__container__single'>
                <img src = {`http://127.0.0.1:5000/static/products/${image}`} alt = ''/>
            </div>
            <div className = 'product__content'>
            <h1>{title}</h1>
            <h3>{`${discount}% off`}</h3>
            <h3>{`${price} Rs`}</h3>
            <p>{description}</p>
            <button className = 'product__button__unique'>Add To Cart</button>
            <button className = 'product__button__unique'>Buy Now</button>
            </div>
        </div>
        </>
    )
}

export default SingleProduct;
import { Button, Card } from '@material-ui/core';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import react, { useState } from 'react';
import { useDispatch } from 'react-redux';
import '../styles/product.css';
import {add_to_cart} from '../../Cart/actions/action';
import Icon from '@material-ui/core/Icon';
import { useHistory } from 'react-router-dom';


const Product = (props) => {

 const history = useHistory();

 const routeChange = (id) =>{ 
    let path = `${id}`; 
    history.push(path);
  }

    const [qty,setQty] = useState(1);
    const dispatch = useDispatch();

    const increaseQty = () => {
        setQty(qty+1);
    }

    const descreaseQty = () => {
        setQty(qty-1);
    }

    return(
        <>
        <div className = 'product__card'>
            <div className = 'image__container__products'>
                <img src = {`http://127.0.0.1:5000/static/products/${props.data.image}`} alt ='' width = '100%' height = '100%'/>
            </div>
            {
            //<div className = 'product__plus__minus'>
            //<i class="fa fa-minus-circle" aria-hidden="true" onClick = {descreaseQty}></i>    
            //<p>Quantity:{qty}</p>
            //<i class="fa fa-plus-circle" aria-hidden="true" onClick = {increaseQty}></i>
            //</div>
            }

            <p className = 'product__title' onClick = {() => routeChange(props.data.id)}>{props.data.title}</p>
            <p className='price__text'>{`${props.data.price}`} Rs</p>
            <button variant = 'contained' color="secondary" className = 'add__to__cart__btn' onClick = { () => dispatch(add_to_cart({'id':props.data.id,'title':props.data.title,'price':props.data.price,'qty':qty,'image':`http://127.0.0.1:5000/static/products/${props.data.image}`,'calc':qty*props.data.price}))}>Add To Cart</button>
        </div>
        </>
    )
}

export default Product;
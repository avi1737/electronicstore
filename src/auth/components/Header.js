import { Badge, Typography } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import { show_category } from '../../Admin/actions/action';
import '../styles/home.css';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';



const Header = (props) => {

  const history = useHistory();
  const dispatch = useDispatch();
  const categories = useSelector( state => state.CategoryReducerState.items);
  const cartitems = useSelector( state => state.CartReducerState.items);


  useEffect(()=> {
    dispatch(show_category());
  },[]);

  const openCart = () => {
    let url = '/Cart'
    history.push(url);
  }

  return (
    <>
    <div className='top__navbar'>
      <div className='top__navbar__text'>
        <p>welcome to online electronic store</p>
      </div>
      <div className = 'top__navbar__links'>
        <Link to = '/Login' className = 'top__navbar__link'>Sign In</Link>
        <Link to = '/SignUp'className = 'top__navbar__link'>Register</Link>
      </div>
    </div>

    <div className = 'main__navbar'>
      <div>
      <ul>
      { 
      categories.map( (category) => <Link className = 'main__navbar__link' to = {`/${category.title}`}>{category.title}</Link>)
      }
      </ul>
      </div>
      <div>
      <Badge badgeContent={cartitems.length} color="secondary">
      <ShoppingCartIcon className = 'cart__icon' onClick = {() => openCart()} />
      </Badge>
      </div>
    </div>
    </>
  )
}

export default Header;
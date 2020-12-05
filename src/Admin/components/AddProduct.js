import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { show_category } from '../actions/action';
import { add_product } from '../actions/addProduct.actions';
import { show_brand } from '../actions/brandActions';
import '../styles/Addproduct.css';

const AddProduct = () => {
    
    const dispatch = useDispatch();

    const [productTitle,setProductTitle] = useState("");
    const [productPrice,setProductPrice] = useState(0);
    const [productDiscount,setProductDiscount] = useState(0);
    const productDiscountPrice = (productPrice) - (productDiscount*productPrice)/100;
    const [productDesc,setProductDesc] = useState("");
    const [productQuantity,setProductQuantity] = useState(0);
    const [productCategory,setProductCategory] = useState("Mobiles");
    const [productBrand,setProductBrand] = useState("Samsung");



    const category = useSelector( state => state.CategoryReducerState.items);
    const brands = useSelector( state => state.BrandReducerState.brands);
    const addProductButton = useSelector( state => state.AddProductReducerState.addProductButton);

    
    useEffect(() => {
        dispatch(show_category()); 
        dispatch(show_brand());
    },[]);


    const add_product_data = {
        title:productTitle,
        brand:productBrand,
        category:productCategory,
        price:productPrice,
        discount:productDiscount,
        discountprice:productDiscountPrice,
        desc:productDesc,
        quantity:productQuantity,
    }


    return(
        <>
        <h1 className='product__heading'>Add Product</h1>
        <div className ='add__product__container'>

            <label>Title of product</label>
            <input type = 'text' placeholder = 'product title' onChange = { (e) => setProductTitle(e.target.value)}/>

            <label>Price</label>
            <input type = 'text' placeholder = 'price' onChange = { (e) => setProductPrice(e.target.value)}/>
            
            <label>Quantity availabel</label>
            <input type = 'number' placeholder = 'quantity' onChange = { (e) => setProductQuantity(e.target.value)}/>

            <label>% discount</label>
            <input type = 'number' placeholder = 'discount' onChange = { (e) => setProductDiscount(e.target.value)}/>

            <label>Price after discount</label>
            <input type = 'text' placeholder = 'discounted price' value = {(productPrice) - (productDiscount*productPrice)/100}/>
            
            <textarea placeholder = 'price discription' rows = '10' cols = '50' onChange = { (e) => setProductDesc(e.target.value)}>

            </textarea>
            <label>Select category</label>
            <select onChange = { (e) => setProductCategory(e.target.value)} value = {productCategory}>
                {
                    category.map( item => <option value = {item.title}>{item.title}</option>)
                }
            </select>

            <label>Select Brand</label>
            <select onChange = { (e) => setProductBrand(e.target.value)} value = {productBrand}>
                {
                    brands.map( brand => <option value = {brand.name}>{brand.name}</option>)
                }
            </select>
            
            
        <button className='product__add__button' onClick = { () => dispatch(add_product(add_product_data))}>{addProductButton}</button>
        </div>
        </>
    )
}

export default AddProduct;
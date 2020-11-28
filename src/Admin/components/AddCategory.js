import React, { useState,useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { add_category,show_category,delete_category } from '../actions/action';
import EditIcon from '@material-ui/icons/Edit';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

export default function AddCategory() {
    const dispatch = useDispatch();
    const [category,setCategory] = useState("");
    const categories = useSelector( state=> state.CategoryReducerState.items);

    useEffect(()=> {
        dispatch(show_category());
    },[categories]);

    const addCategoryBtnText = useSelector( state => state.CategoryReducerState.addCategoryBtn); 
    

    const handleCategory = (e) => {
        setCategory(e.target.value);
    }

    return (
        <>
        <h1 className='product__heading'>Add Category</h1>
        <div className='product__input__outer'>
        <input className='product__input' type='text' placeholder='Category' value = {category}onChange = {handleCategory}/>
        </div>
        <button className='product__add' onClick = {() => dispatch(add_category(category))}>{addCategoryBtnText}</button>
        
        <table className='categories__table'>
            <tr>
                <th>Categories</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
            
    { categories.map( item => <>
    <tr>
        <td>{item.title}</td>
        <td><EditIcon className='edit__icon' /></td>
        <td><DeleteOutlineIcon className='delete__icon' onClick={() => { if(window.confirm("Are you sure want to delete Record!")) { dispatch(delete_category(item.id))};}}/></td>
    </tr>
    </>)}
            
        </table>

        </>
    )
}

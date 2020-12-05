import { Button, Input } from '@material-ui/core';
import { AddAlert } from '@material-ui/icons';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';

const Upload = () => {

    const [pictures,setProductPictures] = useState(null);
    const [imageArrayPreview,setImageArray] = useState([]);
    const [btntext,setbtntext] = useState("Upload Image");
    const {id}  = useParams();

    const handleImages = (e) => {
        let temp_arr = [];
        for(let i = 0; i < e.target.files.length ; i++){
            temp_arr.push(URL.createObjectURL(e.target.files[i]));
        }
        setImageArray(temp_arr);
        
        const formdata = new FormData();
        formdata.append('image',e.target.files[0]);
        setProductPictures(formdata);
    }

    const handleUpload = (e) =>{
        setbtntext("Uploading...");
        axios.post('http://127.0.0.1:5000/uploader/'+id,pictures)
        .then( res => {
            console.log(res);
            setbtntext("Uploaded");
        })
        .catch( err => {
            console.log(err);
        })
    }


    return(
        <>
        <input type = 'file' onChange = { handleImages}></input>
        <div className = 'image__container'>
            {
                imageArrayPreview.map( location => <img src = {location} className = 'preview__image'/>)
            }
        </div>
        <Button onClick = {handleUpload} variant = 'contained' color='primary'>{btntext}</Button>
        </>
    )
}

export default Upload;
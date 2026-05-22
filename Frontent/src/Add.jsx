import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { Link } from 'react-router-dom'
import axios from 'axios';


function Add() {
    const [product,setproduct]=useState({
        name:"",
        in_price:0,
        out_price:0,
        stock:0,
    })
    const saveproduct =()=>{
        axios.post("http://localhost:7000/add-product",product)
        .then(res=>{
            alert(res.data);
        })
    }
  return (
<>
<div className="container-fluid vh-100 bg-primary py-3">
            <div className="container w-50 bg-white p-3 ">
                <div className="d-flex justify-content-between">
                    <h4>Add Product</h4>
                    <Link to="/products" className='btn btn-secondary'>{"<-- "}Back</Link>
                </div>
                <hr />
               <div className="form-group">
<label htmlFor="" className='form-label fw-bold'>Product Name</label>
<input type="text" name="" id="" className='form-control p-1' onChange={(e)=>setproduct({...product,name:e.target.value})}/>
<label htmlFor="" className='form-label fw-bold'>Product InPrice</label>
<input type="number" name="" id="" className='form-control p-1' onChange={(e)=>setproduct({...product,in_price:e.target.value})}/>
<label htmlFor="" className='form-label fw-bold p-1'>Product Out Price</label>
<input type="number" name="" id="" className='form-control' onChange={(e)=>setproduct({...product,out_price:e.target.value})}/>
<label htmlFor="" className='form-label fw-bold p-1'>Product Opening Stock</label>
<input type="text" name="" id="" className='form-control' onChange={(e)=>setproduct({...product,stock:e.target.value})}/>
<div className="d-flex justify-content-end py-3"><button onClick={saveproduct} className='btn btn-success fw-bold'>Save Product</button></div>
               </div>
            </div>
        </div>

</>
  )
}

export default Add
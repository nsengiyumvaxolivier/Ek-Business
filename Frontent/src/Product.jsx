import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import axios from 'axios';

function Product() {
    const [products,setproducts]=useState([]);
    useEffect(()=>{
axios.get("http://localhost:7000/get-product")
.then(res=>{
    setproducts(res.data);
})
    },[])
    return (
        <div className="container-fluid vh-100 bg-primary py-3">
            <div className="container w-100 bg-white p-3 ">
                <div className="d-flex justify-content-between">
                    <h4>Product List</h4>
                    <Link to="/add-product" className='btn btn-success'>Add Product +</Link>
                </div>
                <hr />
                <div className="table-responsive">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th> N <sup><u>0</u></sup></th>
                                <th>Product Name</th>
                                <th>In Price</th>
                                <th>Out Price</th>
                                <th>Stock</th>
                                <th>Manage</th>
                            </tr>
                            
                        </thead>
                        <tbody>
                           {
                        
                            products.map((p)=>(
                                <>
                                <tr key={p.p_id}>
                                    <td>{p.p_id}</td>
                                    <td>{p.p_name}</td>
                                    <td>{p.in_price}</td>
                                    <td>{p.out_price}</td>
                                    <td>{p.p_stock}</td>
                                    <td className='d-flex justify-content-between'>
                        <Link to="view-product" className='btn btn-sm btn-primary'><i className='bi bi-eye'></i> View</Link>
                        <Link to="view-product" className='btn btn-sm btn-info'><i className='bi bi-pencile'></i> View</Link>
                        <Link to="view-product" className='btn btn-sm btn-danger'><i className='bi bi-trash'></i> View</Link>
                        
                        </td>
                       
                               
                                    
                                </tr>
                                
                            </>))
                           
                        }
                          
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )
}

export default Product
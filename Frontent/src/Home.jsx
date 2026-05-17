import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <div className="conainer-fluid bg-primary vh-100">
        <div className="top d-flex w-100 p-2 bg-light">
            <div className="d-flex"><h4>Ek_business</h4></div>
            <Link to="/" className='btn btn-primary btn-sm mx-3'><i className='bi bi-house'></i> Home</Link>
            <Link to="/products" className='btn btn-primary btn-sm mx-3'><i className='bi bi-box'></i> Product</Link>
            <Link to="/salles" className='btn btn-primary btn-sm mx-3'><i className='bi bi-tags'></i> Salles</Link>
            <Link to="/purchases" className='btn btn-primary btn-sm mx-3'><i className='bi bi-list'></i> Purchases</Link>
        </div>
hi
    </div>
    </>
  )
}

export default Home
import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-icons/font/bootstrap-icons.min.css"
import { Link } from 'react-router-dom'

function Salles() {
  return (
    <>
    <div className="conatiner-fluid bg-info vh-100">
        <div className="top d-flex w-100 bg-primary p-2">
            <Link className='text-black btn'><i className='bi bi-arrow'></i>Back</Link>
            <h6>Salles Manaement</h6>

        </div>
    </div>
    </>
  )
}

export default Salles
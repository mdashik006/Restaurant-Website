import React from 'react'
import {Link} from 'react-router-dom'
import '../App.css'

function Navbar({cartarry,setcartarry}) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand text-primary fw-bold fs-4" href="#">Bismillah</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" to='/'>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Menu'>Menu</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/Cart'><span className="bg-primary text-light px-2 py-1 rounded-pill ">{cartarry.length}</span> Cart</Link>
          </li>
        </ul>   
      </div>
    </div>
  </nav>
  )
}

export default Navbar
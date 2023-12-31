import React from 'react'
import pic from '../../assets/pic.jpg'
import "../Header/Header.css"
const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
        <a className="navbar-brand" href="/">
            <img src={pic} alt ="Green Logo" />
            </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">About</a>
            </li>
            <li className="nav-item">
            <a className="nav-link" href="/">Contact Us</a>
            </li>
        </ul>
        </div>
    </div>
    </nav>
    )
    }

export default Header
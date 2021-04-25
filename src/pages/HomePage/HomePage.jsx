import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Home from '../../components/Home/Home';
import "./HomePage.css"


function HomePage(props) {
    return (
        <>
        <nav className="nav">
            <div className="logo">
                <Link to="/home">karmik</Link>
            </div>
            <div className="links">
                <Link to="/login">login</Link>
                <Link to="/signup">signup</Link>
            </div>
        </nav>
        <Home />
        </>
    )
}


export default HomePage;
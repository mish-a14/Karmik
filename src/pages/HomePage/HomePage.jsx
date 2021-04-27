import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Home from '../../components/Home/Home';
import "./HomePage.css"
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Hidden from '@material-ui/core/Hidden';
import MenuIcon from '@material-ui/icons/Menu';
import { Icon } from '@material-ui/core';

function HomePage(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
        <>
        <nav className="nav">
            <div className="logo">
                <Link to="/home">karmik</Link>
            </div>
            <Hidden smDown>
            <div className="links">
                <Link to="/login">login</Link>
                <Link to="/signup">signup</Link>
            </div>
            </Hidden>
            <Hidden mdUp>
            <Button className="menu-button" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                <MenuIcon fontSize="large"/>
            </Button>
            <Menu
                id="simple-menu"
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}><Link to="/home">karmik</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/login">login</Link></MenuItem>
                <MenuItem onClick={handleClose}><Link to="/signup">signup</Link></MenuItem>
            </Menu>
            </Hidden>
        </nav>
        <Home />
        </>
    )
}


export default HomePage;
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

import Button from "./Button";

function Navbar() {

    const [press, setPress] = useState(false);
    const [button, setButton] = useState(true);

    //On press, set press value to the opposite of current press value
    const handlePress = () => setPress(!press);

    const closeMobileMenu = () => setPress(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect (() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    {/*Title and logo*/}
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        TRVL <i className="fab fa-phoenix-framework fa-flip-horizontal"></i>
                    </Link>

                    {/*Hamburger menu*/}
                    <div className="menu-icon" onClick={handlePress}>
                        {/*If on click, set to 'X' icon, else display bars icon*/}
                        <i className={press ? "fas fa-times" : "fas fa-bars"} />
                    </div>

                    {/*close Navbar when menu item is pressed*/}
                    <ul className={press ? "nav-menu active" : "nav-menu"}>
                        <li className="nav-item">
                            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/services" className="nav-links" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/products" className="nav-links" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/signup" className="nav-links-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                    {button && <Button buttonStyle="btn--outline">SIGN UP</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
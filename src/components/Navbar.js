import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <>
            <nav classNmae="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo">
                        TRVL <i class="fab fa-phoenix-framework fa-flip-horizontal"></i>
                    </Link>
                </div>
            </nav>
        </>
    )
}

export default Navbar
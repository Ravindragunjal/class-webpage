import React from "react";

import penta from '../Images/penta.png';
import './List.css';
import { Link } from "react-router-dom";

function List () {
return(
    <>
    <header>
        <div className="container container-flex" >
            <div className="logoContainer" >
                <img src={penta} alt="logo" className="logo" />
            </div>
            <nav className="navbar">
                <div className="List">
                    <Link to="/" className="listItem">Home</Link>

                    <Link to="/about" className="listItem">About</Link>

                    <Link to="/courses" className="listItem">Courses</Link>

                    <Link to="/contact" className="listItem">Contact</Link>

                    <Link to="/gallery" className="listItem">Gallery</Link>

                </div>

            </nav>
        </div>
    </header>
    
    </>
);
}
export default List;
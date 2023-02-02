import React from "react";
import './navbar.css';

const NavBar = () => {
    return (
        <div className="navbarContainer">
            <div className="navbarFloatLeft">
                <h3 className="margin20">Yeti Agency</h3>
                <a href="#" className="margin20">One</a>
                <a href="#" className="margin20">Two</a>
            </div>
            <div className="navbarFloatRight">
                <a href="#" className="margin20">Three</a>
                <a href="#" className="margin20">Four</a>
                <a href="#" className="margin20">Five</a>
                <a href="#" className="margin20">Six</a>
            </div>
            

        </div>

    );
}

export default NavBar;
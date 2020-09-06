import React from "react";
import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <nav>
            <div className="nav-wrapper blue darken-1">
                <Link to="#" className="brand-logo center">Lan Simon Xu</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/experience">Working Experience</Link></li>
                    <li><Link to="/portfolio">Portfolio</Link></li>
                </ul>
            </div>
        </nav>
        

    )
}

export default Navbar;
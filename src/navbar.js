import * as React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="navbar">
           <h1>The Cadache Blog</h1>
           <div className="links">
               <Link to="/" style={{  
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '3px'
               }}>Home</Link>

               <Link to="/create" style={ { 
                       color: "white",
                       backgroundColor: '#f1356d',
                       borderRadius: '3px'
               } }>New Blog</Link>
           </div>
        </nav>
    );
}
 
export default Navbar;
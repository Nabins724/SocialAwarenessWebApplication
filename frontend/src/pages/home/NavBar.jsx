import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';



const buttonStyle = {
    display: 'inline-block',
    padding: '10px 20px',
    margin: '5px',
    backgroundColor: '#467599',
    color: 'white',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '5px',
    transition: 'background-color 0.3s ease',
};

const logOutButton ={
    marginTop: '10px',
    width: '50px',
    height: '30px',
    backgroundColor: '#467599',

};

const navbarStyle = { backgroundColor: '#2c3e50', };
const logoStyle={
   width: '200px', 
   height: '80px', 
   
};


function NavBar() {
    return (
        <div className="navbar bg-base-100" style={navbarStyle} >
            <div className="flex-1">
                {/* Logo test */}
            <img src= {logo} alt='Logo of the company.' style={logoStyle} />
            </div>
            <div className="flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" style={buttonStyle}>Home</Link></li>
                    <li><Link to="/aboutus" style={buttonStyle} >About Us</Link></li>
                    <li><Link to="/profile/:username" style={buttonStyle} >Profile</Link></li>
                    <li><Link to="/logout" style={buttonStyle} >Log Out</Link></li>
                    
                    {/* <li><Link to="/logout" style={logOutButton} >LogOut</Link></li> */}
                    {/* <img src={logOut} alt="Log Out" /> */}

                </ul>
            </div>
        </div>
    )
}

export default NavBar
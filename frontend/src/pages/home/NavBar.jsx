import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/logo/logo.png';
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const NavBar = () => {

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

    const queryClient = useQueryClient();
	const { mutate: logout } = useMutation({
		mutationFn: async () => {
			try {
				const res = await fetch("/api/auth/logout", {
					method: "POST",
				});
				const data = await res.json();

				if (!res.ok) {
					throw new Error(data.error || "Something went wrong");
				}
			} catch (error) {
				throw new Error(error);
			}
		},
		onSuccess: () => {
            toast.success("Logged out successfully.")
			queryClient.invalidateQueries({ queryKey: ["authUser"] });
		},
		onError: () => {
			toast.error("Logout failed.");
		},
	});
	const { data: authUser } = useQuery({ queryKey: ["authUser"] });




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
                    <li> <button style={buttonStyle} onClick={(e) => {e.preventDefault(); logout();}}>LogOut</button></li>
                    
                    {/* <li><Link to="/logout" style={logOutButton} >LogOut</Link></li> */}
                    {/* <img src={logOut} alt="Log Out" /> */}

                </ul>
            </div>
        </div>
    )
}

export default NavBar
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
        fontWeight: 'bold',
        fontSize: "20px",
    };

    const logOutButton = {
        marginTop: '10px',
        width: '50px',
        height: '30px',
        backgroundColor: '#467599',

    };

    const navbarStyle = { backgroundColor: '#2c3e50', };

    const logoStyle = {
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
    const userProfile = authUser?.fullName;
    const userImage = authUser?.profileImg;




    return (

        <div className="navbar bg-base-100" style={navbarStyle} >
            <div className='flex gap-2 items-center'>
                <div className='avatar'>
                    <div className='w-20 rounded-full'>
                    <Link to={`/profile/${authUser?.username}`} ><img src={userImage || "/avatar-placeholder.png"} /></Link>
                        {/* <img src={userImage} /> */}
                    </div>
                </div>
            </div>
            <li><Link to={`/profile/${authUser?.username}`} style={{ color: "white", padding: "10px", fontSize: "25px" }} >{userProfile}</Link>
            </li> <div className="flex-1 flex justify-center">
                <div className="flex items-center justify-center"> {/* Logo */}
                    <img src={logo} alt='Logo of the company.' style={logoStyle} />
                </div>
            </div>
            <div className="flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to="/" style={buttonStyle}>Home</Link>
                    </li> <li><Link to="/aboutus" style={buttonStyle} >About Us</Link></li>
                    <li> <button style={buttonStyle} onClick={(e) => { e.preventDefault(); logout(); }}>LogOut</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar
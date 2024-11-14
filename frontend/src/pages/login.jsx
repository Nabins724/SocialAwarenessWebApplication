import { useState } from "react";
import { Link, useNavigate  } from "react-router-dom";

import { MdOutlineMail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import logo from '../assets/logo/logo.png';
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const logoStyle={
	marginTop: '200px',
	marginLeft: '10px',
	width: '500px', 
	height: '200px', 
	
 };

const LoginPage = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const queryClient = useQueryClient();

	const {
		mutate: 
		loginMutation,
		isError,
		error,
	} = useMutation({
		mutationFn: async ({ email, password }) => {
			try {
				const res = await fetch("/api/auth/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
					},
					body: JSON.stringify({ email, password }),
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
			toast.success("Login Successful. ");
			{

			}
			queryClient.invalidateQueries({queryKey: ["authUser"]});
		},
	});



	const handleSubmit = (e) => {
		e.preventDefault();
		loginMutation(formData);
	};

	const handleInputChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};


	return (
		<div className='max-w-screen-xl mx-auto flex h-screen px-10' style={{backgroundColor:'#6AAAD1'}}>
			{/* Logo placing  */}
			<img src= {logo} alt='Logo of the company.' style={logoStyle} />
			<div className='flex-1 hidden lg:flex items-center  justify-center'>
			</div>
			<div className='flex-1 flex flex-col justify-center items-center'>
				<form className='flex gap-4 flex-col' onSubmit={handleSubmit}>
					<h1 className='text-4xl font-extrabold text-black'>Enter credentials.</h1>
					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdOutlineMail />
						<input
							type='text'
							className='grow'
							placeholder='email'
							name='email'
							onChange={handleInputChange}
							value={formData.username}
						/>
					</label>

					<label className='input input-bordered rounded flex items-center gap-2'>
						<MdPassword />
						<input
							type='password'
							className='grow'
							placeholder='Password'
							name='password'
							onChange={handleInputChange}
							value={formData.password}
						/>
					</label>
					<button className='btn rounded-full btn-primary text-white' >Login</button>
					{isError && <p className='text-red-500'>{error.message}</p>}
				</form>
				<div className='flex flex-col gap-2 mt-4'>
					<p className='text-black text-lg'>{"Don't"} have an account?</p>
					<Link to='/signup'>
						<button className='btn rounded-full btn-primary text-white btn-outline w-full'>Sign up</button>
					</Link>   
				</div>
			</div>
		</div>
	);
};
export default LoginPage;
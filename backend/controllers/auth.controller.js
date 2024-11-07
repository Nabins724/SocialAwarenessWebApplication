/* 
Author: Nabin shrestha
Date: 2024/10/31

Modificatoins: 
Name                                    Date
Nabin Shrestha                          2024/11/03
*/

import { generateTokenAndSetCookie } from "../lib/utils/generateToken.js";
import User from "../models/user.model.js";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
	try {
		const { fullName, username, email, password } = req.body;

		// Using regex to check if the email is valid.
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return res.status(400).json({ error: "Invalid email format" });
		}

		// Checking if the username already exists in the platform/database.
		const existingUser = await User.findOne({ username });
		if (existingUser) {
			return res.status(400).json({ error: "Username is already taken" });
		}

		// Checking if the email already exists in the platform/database.
		const existingEmail = await User.findOne({ email });
		if (existingEmail) {
			return res.status(400).json({ error: "Email is already taken" });
		}

		// Ensuring the password is atleast 6 characters long for security.
		if (password.length < 8) {
			return res.status(400).json({ error: "Password must be at least 8 characters long" });
		}

		// Hash password for security using bcrypt package.
		const salt = await bcrypt.genSalt(10);
		const hashedPassword = await bcrypt.hash(password, salt);

		const newUser = new User({
			username,
			fullName,
			email,
			password: hashedPassword,
		});

		// Creating new user if all the conditions are met to th edatabase
		if (newUser) {
			generateTokenAndSetCookie(newUser._id, res);
			await newUser.save();

			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				username: newUser.username,
				email: newUser.email,
				followers: newUser.followers,
				following: newUser.following,
				profileImg: newUser.profileImg,

			});
		} else {
			res.status(400).json({ error: "Invalid Data, please recheck the details." });
		}
	} catch (error) {
		console.log("Error in signup controller: Check auth controller", error.message);
		res.status(500).json({ error: "Server Error Please try again later." });
	}
};


// Login in function
export const login = async (req, res) => {
	try {
		const { email, password } = req.body;
		const user = await User.findOne({ email });
		const isPasswordValid = await bcrypt.compare(password, user?.password || "");

		if (!user || !isPasswordValid) {
			return res.status(400).json({ error: "Please recheck your email or password" });
		}

		generateTokenAndSetCookie(user._id, res);

		res.status(200).json({
			_id: user._id,
			fullName: user.fullName,
			username: user.username,
			email: user.email,
			followers: user.followers,
			following: user.following,
			profileImg: user.profileImg,
		});
	} catch (error) {
		console.log("Error in login controller.", error.message);
		res.status(500).json({ error: "Server Error: Please try again." });
	}
};



// Logout function
export const logout = async (req, res) => {
	try {
		res.cookie("jwt", "", { maxAge: 0 });
		res.status(200).json({ message: "Logged Out." });
	} catch (error) {
		console.log("Error in logout controller", error.message);
		res.status(500).json({ error: "Server Error: Please try again." });
	}
};


// Log in based on cookie.

export const getMe = async (req, res) => {
	try {
		const user = await User.findById(req.user._id).select("-password");
		res.status(200).json(user);
	} catch (error) {
		console.log("Error in getMe cookie controller. Check auth controller.", error.message);
		res.status(500).json({ error: "Server Error: Please log in again." });
	}
};

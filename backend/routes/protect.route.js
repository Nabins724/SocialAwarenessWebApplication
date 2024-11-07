import User from "../models/user.model.js";
import jwt from "jsonwebtoken";

export const protectRoute = async (req, res, next) => {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res.status(401).json({ error: "Please login with your credentials first." });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: "Error with credentials. Please login in again." });
		}

        // In the event the token/cookie is decoded rest of the details without the password to the request object.
		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ error: "User doesn't exist." });
		}

		req.user = user;
		next();
	} catch (err) {
		console.log("Error in protect.route ", err.message);
		return res.status(500).json({ error: "Server Error" });
	}
};

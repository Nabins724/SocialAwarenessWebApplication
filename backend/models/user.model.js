import mongoose from "mongoose";

// User Schema 

const userSchema = new mongoose.Schema(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		fullName: {
			type: String,
			required: true,
		},
        email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
			minLength: 8,
		},
		
	},
	{ timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;

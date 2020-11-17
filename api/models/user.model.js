"use strict";

let mongoose = require("mongoose");
let Schema = mongoose.Schema;


let UserSchema = new Schema(
	{
		username: {
			type: String,
			unique: true,
			index: true,
			lowercase: true,
			required: "Please fill in a username",
			trim: true,
		},
		email: {
			type: String,
			required: "Please fill in a email",
		},
		password: {
			type: String,
			required: "password is missing",
		},
		name: {
			type: String,
			lowercase: true,
			trim: true,
		},
		lastname: {
			type: String,
			lowercase: true,
			trim: true,
		},
		dni: {
			type: Number,
			trim: true,
		},
		phone: {
			type: String,
			trim: true,
		},
		address: {
			type: String,
			lowercase: true,
			trim: true,
		},
		dob: {
			type: Date,
			trim: true,
		},
		auth: {
			type: Boolean,
			default: false,
		},
		verified: {
			type: Boolean,
			default: false,
		},
		contacts : [
			{
				type : Schema.Types.ObjectId,
				ref: 'Contact'
			}
		]
	},
	{
		timestamps: true,
	}
);

// Add full-text search index
UserSchema.index({
	//"$**": "text"
	password: "text",
	name: "text",
});

module.exports = mongoose.model("User", UserSchema);

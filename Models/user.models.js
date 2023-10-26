import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    email: {
        type: String,
        require: [true, "Email is requried"],
        lowercase: true,
        unique: true
    },
    password: {
        type: String,
        required: [true, "Password is required"],
        min: [6, 'Must be at least 6, got {VALUE}'],
    }
}, { timestamps: true });


export const User = mongoose.model("User", userSchema);
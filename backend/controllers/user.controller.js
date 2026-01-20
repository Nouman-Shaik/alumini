

import { User } from "../models/user.model.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async(req, res) => {
  try {
    const {fullname,email,phoneNumber,password,role} = req.body;
    console.log(req.body);
    if(!fullname || !email || !phoneNumber || !password || !role){
      return res.status(400).json({message: "All fields are required", success: false} );
    }
    const user = await User.findOne({email});
    if(user){
      return res.status(400).json({message: "User already exists", success: false} );
    }
    const hashedpassword = await bcrypt.hash(password,10);
    
    await User.create({
      fullname,
      email,
      phonenumber: phoneNumber,
      password:hashedpassword,
      role

    })
    return res.status(201).json({message: "User registered successfully", success: true} );
  } catch (error) {
    console.log(error);
    
  }


};
export const login = async(req, res) => {
  try {
    const {email,password,role}= req.body;
    if(!email || !password || !role){
      return res.status(400).json({message:
        "Incorrect email or password", success: false} );
      }
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({
        message: "User does not exist", success: false
      })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if(!isPasswordMatch){
      return res.status(400).json({message:
        "Incorrect email or password", success: false} );
    }
    if(role !== user.role){
      return res.status(400).json({message:"user role mismatch", success: false });
    }

    const tokendata ={
    userId: user._id
    }

    const token =await jwt.sign(tokendata, process.env.SECRET_KEY, {expiresIn: '1d'});

    user={
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phonenumber: user.phonenumber,
      role: user.role,
      profile: user.profile
    }

    return res.status(200).cookie('token',token,{maxAge:1*24*60*60*1000, httpOnly:true,sameSite:'strict'}).json({
      message:`welcome back ${user.fullname}`,user, success:true,
    })





      
    
  } catch (error) {
    console.log(error);
  }
};

export const logout = async(req, res) => {
  try {
    return res.status(200).cookie('token',"",{maxAge:0}).json({
      message: "Logged out successfully", success: true
    })

    
  } catch (error) {
    console.log(error);
    
  }
};

export const updateProfile = async(req, res) => {
  try {
    const {fullname,email,phonenumber,bio,skills}=req.body;
    const file=req.file;

    //couldinary
    let skillsArray;
    if(skills){
      skillsArray = skills.split(",");

    }

     
    const userId = req.id//from auth middleware
    let user = await User.findById(userId);

    if(!user){
      return res.status(404).json({
        message: "user not found",
        success: false
      })
    }

    if(fullname) user.fullname=fullname;
    if(email) user.email=email;
    if(phonenumber) user.phonenumber=phonenumber;
    if(bio) user.bio=bio;
    if(skillsArray) user.skills=skillsArray;


    //resume

    await user.save();

    user={
      _id: user._id,
      fullname: user.fullname,
      email: user.email,
      phonenumber: user.phonenumber,
      role: user.role,
      profile: user.profile,
    }
    return res.status(200).json({
      message: "Profile updated successfully",
      user,
      success: true
    })
    
  } catch (error) {
    console.log(error);
  }
}

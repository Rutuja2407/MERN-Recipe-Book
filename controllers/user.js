import {User} from '../Models/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async(req,res)=>{
    const {name,gmail,password} = req.body;

    console.log(req.body)
    try {
        let user = await User.findOne({gmail})
        if(user) return res.json({message:"user already exist"})

        const hashPass = await bcrypt.hash(password,10)
        
        user = await User.create({name,gmail,password:hashPass})   
        res.json({message:"user registered successfully",user})
    } catch (error) {
        res.json({message:error})
    }
}

export const login = async (req,res) =>{
    const{gmail,password} = req.body
    try {
        let user = await User.findOne({gmail})
        // console.log("user is comming fro login",user)
        if(!user) return res.json({message:"no user found"})
        
        const validPass = await bcrypt.compare(password,user.password);
        
        if(!validPass) return res.json({message:"invalid password"})

        const token = jwt.sign({userID:user._id},"!@#$%^&*()",{
            expiresIn:'1d'
        })
        
        res.json({message:`welcome ${user.name}`,token})

    } catch (error) {
        res.json({message:error})
    }
}


export const profile = async (req,res) =>{
    res.json({user : req.user})
}
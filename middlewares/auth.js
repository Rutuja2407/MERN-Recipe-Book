import { User } from "../Models/User.js";
import jwt from "jsonwebtoken";


export const Authenticate = async (req,res,next)=>{
    const token = req.header("Auth");
    try {
        if(!token) {
            return res.json({message:"login first"});
        }
        
             const decode = jwt.verify(token,"!@#$%^&*()");
            // console.log("this is decoded data",decode)

            const id = decode.userID;
            
            let user = await User.findById(id)

            if(!user){
                res.json({message:"user not exist"});
            } 
    
            req.user = user;

            next();
    } catch (error) {
        return res.json({message:error})
    }
}
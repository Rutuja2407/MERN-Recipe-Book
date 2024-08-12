import express from 'express'
import mongoose from 'mongoose';
import userRouter from './routes/user.js'
import bodyParser from 'express';
import recipeRouter from './routes/recipe.js'
import cors from 'cors'


const app = express();

app.use(bodyParser.json())

app.use(cors({
    origin:true,
    methods:["GET","POST","PUT","DELETE"],
    credentials:true
}))

// userRouter
app.use('/api',userRouter)

//recipe router
app.use('/api',recipeRouter)

mongoose.connect(
    "mongodb+srv://rutujag2407:fq7hftYTcWnfEalo@cluster0.dlpha.mongodb.net/",{
    dbName:"MERN_Recipe_Youtube",
    }

).then(()=>console.log("MongoDB connected"))
.catch((err)=>console.log(err));

const  port = 3000;

app.listen(port,()=>console.log(`server is running on ${port}`))




// mongodb+srv://rutujag2407:<password>@cluster0.dlpha.mongodb.net/

//username - rutujag2407
//password - fq7hftYTcWnfEalo
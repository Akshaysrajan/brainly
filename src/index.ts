
import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";
import { UserModel } from "./db";
const JWT_PASSWORD = "123123"
const app = express();
app.use(express.json())



app.post("/api/v1/signup", async (req, res) => {
    //implement this by own : zod validation , hash the password
    const username = req.body.username;
    const password = req.body.password;

    try {
        await UserModel.create({
            username: username,
            password: password
        })
    
        res.json({
            message: "User signed up"
        })
        
    } catch (error) {
        res.status(411).json({
            message:"User already exist"
        })
    }


})

app.post("/api/v1/signin", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const existingUser = await UserModel.findOne({
    username,
    password
  })
  if(existingUser){
    const token = jwt.sign({
        id : existingUser._id
    }, JWT_PASSWORD)
    res.json({
        token
    })
  } else{
    res.status(403).json({
        message:"Incorrect credentials"
    })
  }
})

app.get("/api/v1/content", (req, res) => {
    
})

app.delete("/api/v1/signup", (req, res) => {
    
})

app.post("/api/v1/brain/share", (req, res) => {
    
})

app.get("/api/v1/brain/:sharelink", (req, res) => {
    
})


app.listen(3000);
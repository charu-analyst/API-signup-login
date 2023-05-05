const model = require('../models/userModel');
const bcrypt = require('bcrypt');
const nodemailer = require('nodemailer');
const requestIP=require('request-ip');
const Otp=require('../otp/otpgen.js');
const { mongoose } = require('mongoose');

const register= async (req,res)=>{
    try{
        const {email}=req.body;
        const newUser = await model.findOne(email.email);
        if(newUser){
            return res.status(400).send({message:"user already exists"});
        }else if(!newUser){

            let otp=Otp.generateOtp();
            req.body.otp=otp;
           res.send(req.body)

            let password=bcrypt.hashSync(req.body.password,10);
            req.body.password=password;
    
            const result=await model(req.body).save();
        }    
    }catch(err){
        console.log(err)
           return res.status(400).send(err);
    }
}

const login = async (req,res)=>{
    try{
        const {email,password}=req.body;
        const useremail=await model.findOne(email);
        
        const userpassword=bcrypt.compare(password,userpassword.password);
        if(useremail.password==userpassword){
            return res.status(200).send({message:success});
        }else{
            return res.status(400).send({message:"password incorrect"});
        }
    }catch(error){
         return res.status(400).send({message:"invalid request"});
    }
}

const getUser = async (req,res)=>{
    try{
        const {id}=req.params;
        const getData=await model.findById({_id:id});
        return res.status(200).send(getData);
    }catch(error){
       return res.status(400).send({message:error});
    }
}

const updateUser = async (req,res)=>{
    try{
        const id=req.params.id;
        const result=await model.findByIdAndUpdate(id,req.body,{new:true})
        res.status(200).send(result)
    }catch(error){
        console.log(error)
    }
}
const deleteData=async(req,res)=>{
    try{
        const data=await model.findByIdAndDelete(req.params.id);
        return res.status(200).send(data);
    }catch(error){
        return res.status(400).send({message:"invalid request"});
    }
}

const emailVerify = async(req,res)=>{
    let otp=Otp.generateOtp();

    const transporter= nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:587,
        secure:false,
        auth:{
            user:"charulata.yadav@indicchain.com",
            pass:"ovscmoyqdyhbfhdz",
        },
    });
    const mailOptions=await transporter.sendMail({
    from:"charulata.yadav@indicchain.com",
    to:req.body.email,
    subject:"Hello verify your otp"+" from "+req.body.email,
    html:'<div>hii '+
   
    ',please click here to'+
    
    otp
    +
    'verify  Otp</div>',
});
    
 transporter.sendMail(mailOptions,(error,info)=>{
         if(error){
            console.log(error);

         }else{
            console.log("Email sent:");
            res.send("otp sent successfully");
         }
 })

}

const ip=async(req,res)=>{
    const ipAddress=requestIP.getClientIP(req);
    res.send(ipAddress);
}




module.exports={
    register,
    login,
    deleteData,
    getUser,
    updateUser,
    emailVerify
    
}
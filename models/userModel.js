const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
                
    },
    mobile:{
        type:Number
        
    },
    password:{
        type:String
    },
    otp:{
        type:String,
        text:''
    },
    id:{
        type:String,
        otp:''
    }


});
module.exports=mongoose.model('user',userSchema);

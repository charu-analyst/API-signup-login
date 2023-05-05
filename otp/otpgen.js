const otp=require('otp-generator');

module.exports ={

    generateOtp:()=>{
      return  Math.floor( Math.random() * 90000000+10000000).toString();
    }
}
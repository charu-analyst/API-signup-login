const mongoose=require('mongoose');
const url="mongodb://127.0.0.1:27017/mobi"
// const connecttionParams={useNewUrlParser:true,useUnifiedTopology:true}



mongoose 
 .connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
         })   
 .then(() => console.log("Database connected!"))
 .catch(err => console.log(err));
// mongoose.connect(url,connecttionParams)n
// .then(()=>{console.log("Mongodb connected")})
// .catch((err)=>{console.log("Mongo Error",err)});


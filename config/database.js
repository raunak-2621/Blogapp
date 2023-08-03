const mongoose=require("mongoose");

require("dotenv").config();

const connectionWithDb=()=>{
    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log("DB Connection Successful"))
    .catch( (error)=>{
        console.log("Db facing connection issues");
        console.log(error);
        process.exit(1);
    });
}

module.exports=connectionWithDb;
import mongoose from "mongoose";

export const dbConnection =()=> {
  mongoose.connect(process.env.MONGO_URI, {
dbName:"RESTAURANT"
  }).then(()=>{
    console.log("connrcted to database")
  }).catch(err=>{
    console.log(`some error while connecting db ${err}`)
  })
}
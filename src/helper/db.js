import mongoose from "mongoose"
export const connectDb = async() => {

    try{

       const connection = await  mongoose.connect(process.env.MONGO_DB_URL,{
        dbName:'work_manager',
       });
       console.log("db connected...")
    }catch(err){
      console.log(err)
      console.log("failed to connect with database")
    }
}
//import {mongoose} from "mongoose"
//export const connectDB=async()=>{
  //  await mongoose.connect('mongodb+srv://mahak:mahak@cluster0.1mhgzzg.mongodb.net/lii')
//.then(()=>console.log('db Connected'));
    
//}


import mongoose from 'mongoose'; // Remove curly braces

let isConnected = false; // Global variable to track the connection status

export const connectDB = async () => {
  if (isConnected) {
    console.log('Already connected to the database');
    return;
  }

  try {
    const db = await mongoose.connect('mongodb+srv://mahak:mahak@cluster0.1mhgzzg.mongodb.net/lii', {
   
    });
    isConnected = true; // Update the global variable when successfully connected
    console.log('DB Connected');
  } catch (error) {
    console.error('DB Connection Error:', error);
   
  }
};

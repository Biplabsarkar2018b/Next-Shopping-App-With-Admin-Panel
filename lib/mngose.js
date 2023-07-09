import mongoose from 'mongoose';
import React from 'react'

const mngose = () => {
  const uri = process.env.MONGODB_URL;
  if(mongoose.connection.readyState===1){
    return mongoose.connection.asPromise();
  }else{
    return mongoose.connect(uri);
  }
}

export default mngose
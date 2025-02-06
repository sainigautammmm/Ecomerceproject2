const mongoose = require('mongoose');
require('dotenv').config();

const url = process.env.DATABASE;

const connectDatabase =    async ()=>{
    try {
        await mongoose.connect(url);
        console.log("Database connected sucessfully");

    } catch (error) {
        console.log(`failed to connect with database ${error.message}`);
         console.log(error);
    }

};

module.exports = connectDatabase;
const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&directConnection=true&ssl=false";
// console.log(mongoURI);

const connectToMonngo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log("Connect to Database");
    })
}

module.exports = connectToMonngo;
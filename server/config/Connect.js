var mongoose = require('mongoose')

const Connect = async() => {
    try{
        mongoose.connect(process.env.DB_URI,{ useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
            if(err){
                return console.log("error connecting to database")
            }
            console.log("connected to database successfully!!")
        })
    }catch(error){
        console.log(error.message)
    }
}

module.exports = Connect
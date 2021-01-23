var express = require('express')
require('dotenv').config()
var cors = require('cors')
const Connect = require('./config/Connect')

const app = express()

var contactRouter = require('./routes/Contacts')
Connect()
app.use(cors())

app.use(express.json())
app.use("/contacts", contactRouter)

app.listen(process.env.PORT, (err)=>{
    if(err){
        return console.log("Error connection to server!!")
    }
    console.log(`Connected to server on port ${process.env.PORT}`)
})
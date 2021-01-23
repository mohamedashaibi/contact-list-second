var express = require('express')

var Contact = require('../models/Contacts')

var router = express.Router()

//This is the Contact router http://localhost:5000/contacts

router.get("/", (req,res)=>{
    Contact.find((err, doc)=>{
        if(err){
            res.send(err.message)
        }
        res.send(doc)
    })
})

router.post("/", (req,res)=>{
    let params = req.body;
    let contact = new Contact({
        name: params.name,
        email: params.email
    })
    contact.save((err, doc)=>{
        if(err){
            return console.log(err)
        }
        console.log("Added successfully!" + doc)
        res.send(doc)
    })
})

module.exports = router
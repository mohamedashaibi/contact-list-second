var mongoose = require('mongoose')

var Contact = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model("Contact", Contact)
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/studentDB', {
        useNewUrlParser: true
    },
    err => {
        if (!err) {
            console.log('Connection to mongodb database succesful')
        } else {
            console.log('connection error ' + err)
        }
    }
)
require('./student.model')
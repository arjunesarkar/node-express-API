const mongoose = require('mongoose');
const validator = require('validator')

const schema =mongoose.Schema({
    name: {
        type:String,
        required: true,
        trim: true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        validate:{
            validator:(v)=>{
                return validator.isEmail(v)
            },
            massage:`{VALUE} is not requird`
        }
    },
    phone:{
        type:String,
        required:true,
        trim:true,
    }
})

const contact = mongoose.model('data', schema);
module.exports = contact;

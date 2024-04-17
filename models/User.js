const mongoose = require('mongoose')
const validator = require('validator')
const schema = mongoose.Schema

const userSchema = new schema({
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
    password : String
});

const User = mongoose.model('user', userSchema);

module.exports = User;
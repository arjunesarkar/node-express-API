const User = require('../models/User')
const bycript = require('bcrypt')

const registerController = (req, res, next)=>{
    bycript.hash(req.body.password, 10, (err, hash)=>{
        if(err){
            res.json({
                error:err
            })
        }
        let user = new User({
            email: req.body.email,
            password : hash
        })
        user.save()
            .then(result=>{
                res.status(200).json({
                    massege: 'user creates successfully',
                    result
                })
            })
            .catch(error=>{
                res.json({
                    error
                })
            })
    })

}
const logInController = (req,res,next)=>{
    let email= req.body.email
    let password = req.body.password

    User.findOne({email})
        .then(user=>{
            if(user){
                bycript.compare(password, user.password,(err, result)=>{
                    if(err){
                        res.json({
                            massege:'user occerred'
                        })
    
                    }
                    if(result){
                        res.json({
                            message: 'login successfully'
                        })
                    }else{
                        res.json({
                            message:'password Doesn match'
                        })
                    }
                })
            }else{
                res.json({
                    message:'user not found'
                })
            }
           
        })
}


const getAllUser = (req, res, next)=>{
    User.find()
        .then(users=>{
            res.json({
                users
            })
        })
        .catch(error=>{
            res.json({
                error
            })
        })
}

module.exports = {registerController, getAllUser, logInController}
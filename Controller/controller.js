const Contact = require('../models/Contact')

const getController = (req, res, next) => {
    Contact.find()
        .then(data => {
            res.status(200).json({
                message: `data fetched`,
                contact: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: `error fetching data`,
                error: err
            })
        })
};

const postController = (req, res, next) => {
    const { name, email, phone } = req.body;

    // Validate input
    if (!name || !email || !phone) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    const newContact = new Contact({
        name: name,
        email: email,
        phone: phone
    });

    newContact.save()
        .then((data) => {
            res.status(201).json({
                message: `contact added`,
                contact: data
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                message: `error adding contact`,
                error: err
            });
        });
};
const getSingleId = (req,res,next)=>{
    let id = req.params.id
    Contact.findById(id)
        .then(contact=>{
            res.status(404).json({
                contact
            })
        })
        .catch((err)=>{
            res.status(500).json({
                message:`error`,
                error :err
            })
        })
}

const delateController = (req,res, next)=>{
    let id = req.params.id
    Contact.findByIdAndRemove(id)
        .then(result=>{
            res.status(200).json({
                message:`contact deleted`,
                result
            })
        })
        .catch((err)=>{
            res.status(500).json({
                message:`error`,
                error :err
            })
        })
}

const updateContact = (req, res, next)=>{
    let id = req.params.id
    Contact.findByIdAndUpdate(id)
        .then(result=>{
            res.status(200).json({
                message:`Editing Completed`,
                result
            })
        })
        .catch((err)=>{
            res.status(500).json({
                message:`error`,
                error :err
            })
        })
}

module.exports = { getController, postController, getSingleId, delateController, updateContact };

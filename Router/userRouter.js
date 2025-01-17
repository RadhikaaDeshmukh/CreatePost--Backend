const express = require('express');
const router = express.Router(); 
const User = require('../Models/user');

router.post('/' ,async(req,res) => {
    // console.log(req.body);
    const {name,email,age} = req.body
try {
    const userAdd = await User.create({
        name:name,
        email:email,
        age:age,
    });
     res.status(200).send(userAdd)   
}catch (error) {
    res.status(500).send(`server error ${error}`) 
}
});

router.get('/',async (req,res) => {
    try {
        const getAll = await User.find();
        res.status(200).send(getAll) 
        }catch (error) {
        res.status(500).send(`server error ${error}`) 
    }
});

// GET SINGLE USER 
router.get('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        // const{name, eamil, age} = req.body;
        const getbyId = await User.findById({_id:id})
        res.status(200).send(getbyId)
    } catch (error) {
        res.status(500).send(`server error ${error}`) 
    }
})

router.delete('/:id', async(req,res) => {
    try {
        const {id} = req.params;
        const deleteById = await User.findByIdAndDelete({_id:id});
        res.status(200).send(deleteById)
    } catch (error) {
        res.status(500).send(`server error ${error}`) 
    }
})


router.patch("/:id", async(req,res) => {
try {
    const {id} = req.params;
    const {name,email,age} = req.body;
    const updateUser = await User.findByIdAndUpdate(id,req.body,{new:true});
    res.status(200).send(updateUser)
} catch (error) {
    res.status(500).send(`server error ${error}`) 
}
})






module.exports = router;
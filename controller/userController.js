const Users = require('../model/user');

const getUser = async(req,res)=>{
    try{
        const users = await Users.findAll();
        return res.status(200).json(users);
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Users fetching failed.'});
    }
};

const postUser = async(req,res)=>{
    try{
        const {name,email,contact} = req.body;
        await Users.create({name,email,contact});
        return res.status(200).json({message:`User with name:${name} added.`});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Adding user failed.'});
    }
};

const deleteUser = async(req,res)=>{
    try{
        await Users.destroy({
            where:{
                id: req.params.id
            }
        });
        return res.status(200).json({message: 'User deleted.'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({message: 'Delete failed.'});
    }

};

module.exports = {getUser,postUser,deleteUser};
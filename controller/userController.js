const { Users, Department, IdentityCard } = require('../model');


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

const addingValuetoUserandIdentityTable = async(req,res)=>{
    try{
        const user = await Users.create(req.body.user);
        const idCard = await IdentityCard.create({
            ...req.body.IdentityCard , 
            userId:user.id})

        res.status(201).json({user,idCard});
    }
    catch(error){
        res.status(500).json({error: error.message});
    }
}

const addDepartment = async (req, res) => {
    try {
        const department = await Department.create(req.body);
        res.status(201).json(department);
    } catch (err) {
        res.status(500).json({ message: 'Failed to add department' });
    }
};

module.exports = {getUser,postUser,deleteUser,addingValuetoUserandIdentityTable,addDepartment};
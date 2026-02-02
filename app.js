const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

const userRouter = require('./router/userRouter');

app.use('/api/users',userRouter);

const db = require('./model/database');
require('./model');

(async () =>{
    try{
        await db.authenticate();
        console.log('DB connected.');

        await db.sync({force:false});
        console.log('DB synced.');

        app.listen(3000, ()=>{
            console.log('Server Started');
        });
    }
    catch(err){
        console.log(err);
    }
})();
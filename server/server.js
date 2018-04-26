require('dotenv').config();
const express = require('express');
const session = require('express-session');
const massive = require('massive');
const bodyParser = require('body-parser');
const userController = require('../server/controllers/userController');
const checkForSession = require('../server/middlewares/checkForSessions')


const{
    SERVER_PORT,
    SESSION_SECRET,
    CONNECTION_STRING
}=process.env


const app = express();

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db)
})

app.use(bodyParser.json())


app.use(session({
    secret:SESSION_SECRET,
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:300000
    }
}))

app.use(checkForSession)

app.post('/api/newlisting', userController.addlisting)
app.delete('/api/deleteproperty/:id', userController.deleteproperty)
app.get('/api/gethouses', userController.gethouses)
app.post('/api/destroy', userController.destroy)
app.get('/api/login/:usersname/:userspassword', userController.checkuser)
app.get('/api/register/:username', userController.registerCheck)
app.post('/api/register/:username/:password', userController.registeruser)


app.listen(SERVER_PORT, ()=> console.log(`I'm always listening on port: ${SERVER_PORT}`))
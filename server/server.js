const express=require('express');
const bodyParser=require('body-parser');
const morgan = require('morgan');
const cors=require('cors');
const db = require('./db').db;
const questionTable = require('./db').question;
const userTable = require('./db').user;
const helpers= require('./helpers');
const app = express()
const bcrypt= require('bcryptjs');
const Sequelize = require('sequelize');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(morgan('combine'));
app.use(cors());

//app.use(express.static('../client/dist'));

// app.get ('/', (req, res) => {
//     res.send({
//         msg:"Home page"
//     });
// })

app.post('/signup',  async (req, res) =>{
    var newUser={
        username: req.body.username,
        password: req.body.password
    };
    if ( await helpers.user_exists(newUser.username)){
        res.send({
            msg:'User is found, please sign in instead'
        })
    }
    else{ 
       await bcrypt.hash(newUser.password,10, (err, hash) =>{
            if (err){
                 res.status(500).send({error:err})
            }
            else{
                newUser.password= hash;
                userTable.create(newUser)
                .then((record)=>{           
                     res.send ({
                        newUser: record,
                        msg: `user was created sucessfully`
                    })
                })
                .catch ((err)=>{console.log(err);})
            }
                })
            }
        })
            
    
app.post('/signin', (req, res) =>{
    userTable.findOne({
        where:{
            username: req.body.username
        }
    })
    .then(found => {
        if (found !==null){
        bcrypt.compare(req.body.password, found.password ,(err, result) =>{
            if (err) {
                res.status(500).send({error:err})
            }
            else{
                res.status(200).send({msg:'Loggedin successfully'})
            }
        })}
        else{
            res.status(200).send({msg:'the user doesnot exist, please regiser first'})
        }
    })    
})


app.post('/newq', (req,res) =>{
    questionTable.create(req.body)
    .then(newq => {
        res.status(200).send({msg:'a new question was added succesfully'})
    })
    .catch(err => {
        res.status(500).send({msg:err})
    })
})

//admin


// get all unanswered questions for admin 
app.get ('/qs' ,(req,res)=>{
    questionTable.findAll({where:{
        ans: ''
    }})
    .then( questions =>{
        res.status(200).send({questions:questions})
    })
})

app.post('/aq', (req,res) =>{
    questionTable.findOne({where:{
        quest: req.body.quest
    }})
    .then(foundq => {
        foundq.updateAttributes({
            ans: req.body.ans
        })
        res.status(200).send({ansewered:foundq, msg: 'The answer was sent successfully'})
    })
})

// get the last answered question for other users
app.get('/lastq', (req,res) =>{
    questionTable.findAll({where:{
            ans: {[Sequelize.Op.not] : ''}
        },
        order:[['createdAt','DESC']],
        limit:1
    })
    .then( que=>{
        res.status(200).send({question:que})
    })

})

var PORT = process.env.PORT ||8001;
app.listen(PORT, () =>{
    console.log('listening to port' + PORT);
    db
    .sync()  // {force:true}
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch((err) => {
        console.error('Unable to connect to the database:', err);
    });    
})

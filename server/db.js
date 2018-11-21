const Sequelize = require('sequelize');

const db = new Sequelize('sql7266289', 'sql7266289', 'MRAsKhR3SW', {
  host: 'sql7.freemysqlhosting.net',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },

});


const User = db.define('user',{
    username:{
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
        validatet:{
            notEmpty: true
        }
    },
    password:{
        type: Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty: true
        }
    }
})

const Question = db.define('question',{
    quest:{
        type: Sequelize.STRING,
        allowNull: false,
        validatet:{
            notEmpty: true
        }
    },
    askedby: {
        type:Sequelize.STRING,
        allowNull:false,
        validate:{
            notEmpty:true
        }
    },
    ans: {
        type: Sequelize.STRING,
        defaultValue: ''
    },    
})

module.exports={
    user: User,
    question: Question,
    db: db,     
}
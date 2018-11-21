
const userTable = require('./db').user;

async function user_exists(username) {
    var msg = false
    await userTable.findOne({where:{ username: username
    }})
    .then( (record) => {
       msg= (record !== null)?  true : false
    })
    return msg
}

module.exports={
    user_exists:user_exists
}
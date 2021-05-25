const Users = require('../models/User')

exports.createUser = async (db, input) => {
  
  const user = await Users.query(db).insert(input)
  console.log(user)
  return user

}

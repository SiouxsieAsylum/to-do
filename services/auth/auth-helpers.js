const bcrypt = require('bcryptjs');

function comparePass(userPassword, databasePAssword){
  return bcrypt.compareSync(userPassword, databasePAssword);
}

function loginRedirect(req,res,next){
  if (req.user) return res.redirect('/user');
  next();
}

function loginRequired(req,res,next){
  if(!req.user) return res.redirect('/auth/login')
  next();
}

module.exports = { comparePass, loginRedirect, loginRequired };

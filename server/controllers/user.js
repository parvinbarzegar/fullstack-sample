const User = require('../modules/user');
const passport = require('passport');
var jwt = require('jsonwebtoken');

exports.login =  (req , res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
      });
      req.login(user , function(err){
        if(err){
          console.log(err);
        }else{
          passport.authenticate("local")(req,res, function(){
          //  console.log(req.user.user_role);
            if(req.user.user_role.toString() !=="61916d2a1bef7aa72a15437e"){
              req.logout();
              res.json(null);
            }else{
              var token = jwt.sign({username: user.username}, 'secret',{expiresIn : '1h'});
              res.json({
                user ,
                token
              });
            }
            
          });
        }
      });
};

exports.register = (req, res) => {
  const {active, username, email, phone_number, address, zip_code, city ,name , user_role} = req.body;
    User.register({
      username,
      phone_number, 
      email,
      address,
      zip_code,
      active,
      city,
      name,
      user_role
      }, req.body.password, function(err, user){
        if(err){
          console.log(err);
          //res.redirect("/register");
        }else{
          passport.authenticate("local")(req, res, function(){
            res.json({
              data: "registered."
            });
          });
        }
      });
};

exports.logout = (req , res) => {
    req.logout();
 res.json({
     data : 'log out'
 });
};

exports.currentUser = async (req, res)=>{

  console.log("username",req.username);
  await User.findOne({username: req.username}).exec((err,user)=>{
      if (err) throw new Error(err);
      res.json(user);
  });
};
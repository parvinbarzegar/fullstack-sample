var jwt = require('jsonwebtoken');


exports.authCheck = async(req,res,next) =>{
   // console.log(req.headers.token); // token

    try {
        jwt.verify(req.headers.token, 'secret', function(err, decoded) {
            req.username = decoded.username;
          });
          
        next();
        
      } catch (err) {
        res.status(401).json({
          err: "Invalid or Expired token",
        });
      }
}
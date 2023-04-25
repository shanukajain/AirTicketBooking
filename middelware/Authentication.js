var jwt = require('jsonwebtoken');
const Authentication=(req,res,next)=>{
let token =req.headers.authorization;
if(token){
    var decoded = jwt.verify(token, 'Air_ticket');
    req.body.user=decoded.user;
    console.log(decoded.user);
    next();
}else {
    res.send("login again");
}
}

module.exports={
    Authentication
}
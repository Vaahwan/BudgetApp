const jwt = require("jsonwebtoken");

const auth = (req,res,next)=>{
    try{
        const token = req.headers.authrization;
        const decodedToken = jwt.verify(token,"aahwan",function(err,decoded){
            if(err){
                res.send(err);
            }
            res.send(decoded.userId)
        });
    }
    catch(error){
        res.status(401).send("unauthorised user");
    }
}

module.exports = {auth};
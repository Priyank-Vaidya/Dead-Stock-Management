const jwt = require('jsonwebtoken');
// const {next} = require("mongodb/src/cursor/abstract_cursor");

exports.auth = async (req, res)=>{
    const token = req.header('Authorization').replace('Bearer ', '') || req.cookies.token || req.body.token

    if(!token){
        return res.status(403).send("Token is Missing");

    }
    try{
        const decode = jwt.verify(token, process.env.SECRET_KEY, {expiresIn:'5d'}, (err, result )=>{
            if(err){
                res.send(err.message);
            }
            res.send(result);
        }, );
        console.log(decode);

    }
    catch (e){
        res.status(401).send("Invalid Token");
    }
}
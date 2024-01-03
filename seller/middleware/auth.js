var jwt = require('jsonwebtoken');

module.exports.checkToken = async (req,res,next) => {
        jwt.verify(req.headers.authorization,'token',next);
}
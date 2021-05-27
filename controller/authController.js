const jwt = require('jsonwebtoken');

const TOKEN_SECRET = 'reactassignment';

function generateAccessToken(username) {
    return jwt.sign(username, TOKEN_SECRET);
}

exports.login = (req, res) => {
    const username = req.body.username;
    res.send(generateAccessToken(username));
}

exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
  
    if (token == null) return res.sendStatus(401)
  
    jwt.verify(token, TOKEN_SECRET, (err, user) => {
      console.log(err)
  
      if (err) return res.sendStatus(403)
  
      req.user = user
  
      next()
    })
  }
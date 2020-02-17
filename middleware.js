const jwt = require('jsonwebtoken');
const secret = 'mysecretsshhh';

const withAuth = function (req, res, next) {
  // const token = 
  //     req.body.token ||
  //     req.query.token ||
  //     req.headers['x-access-token'] ||
  //     req.cookies.token;
  const db = req.app.get('db')
  const token = req.headers.authorization;
  console.log(`in withAuth, token = ${token}`)
  if (!token) {
    res.status(401).send('Unauthorized: No token provided');
  } else {
    jwt.verify(token, secret, function (err, decoded) {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        db.profile.findOne({ user_id: decoded.profile_id })
          .then(profile => {
            req.session = { profile }
            next();
          })
          .catch(err => { throw new Error(err) })
      }
    });
  }
}

module.exports = withAuth;
// We require the express library
const express = require('express');
// we create a variable to use that is an Express Router Object
const router = express.Router();

const db = require('../models');

// Standard app METHOD call, we just replace our 'app' or express instance with our router variable
router.get("/", (req, res) => {
    let userArr = [];

    db.User.findAll({}).then(users => {
      console.log(users);
      users.forEach(user => {
        //   console.log("********");
        //   console.log(user.dataValues);
          userArr.push(user.dataValues)
      });
    //   console.log("---------");
    //   console.log(userArr);
      res.render('about', { userArr: userArr });
    });
});
// ** Also note the route above!! While we declare the route as '/' remember that we are using the express middleware call app.use('/api', router) which prepends our actual route to access this functionality is 'localhost//:3000/api/'


// We export the 'router' object so the routes are available outside of this file
module.exports = router;
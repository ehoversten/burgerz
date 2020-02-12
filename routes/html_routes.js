// We require the express library
const express = require('express');
// we create a variable to use that is an Express Router Object
const router = express.Router();

// Standard app METHOD call, we just replace our 'app' or express instance with our router variable
router.get("/", (req, res) => {
    res.render('about');
})
// ** Also note the route above!! While we declare the route as '/' remember that we are using the express middleware call app.use('/api', router) which prepends our actual route to access this functionality is 'localhost//:3000/api/'


// We export the 'router' object so the routes are available outside of this file
module.exports = router;
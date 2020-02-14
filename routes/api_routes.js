const express = require('express');
// Instantiate an Express Router
const router = express.Router();

const db = require('../models');

// Declare routes
router.get('/', (req, res) => {
    let obj = {
        title: 'Testing'
    }

    // return JSON to the browser
    res.json(JSON.stringify(obj));
});

router.get('/data', (req, res) => {
    db.User.findAll({}).then(users => {
        console.log(users);
        res.json(users);
    })
});

router.get('/create', (req, res) => {
    let newUser = {
      first_name: "Bob",
      last_name: "Bobberson",
      email: "bandb@yahoo.com",
      user_pass: "pass1234"
    };

    console.log(newUser);
    
    db.User.create(newUser).then(user => {
        console.log(`New User created ${user}`);
        res.json(user);
    });

    // res.json(user);
})

// Export the routes
module.exports = router;
const express = require('express');
// Instantiate an Express Router
const router = express.Router();

// Declare routes
router.get('/', (req, res) => {
    let obj = {
        title: 'Testing'
    }

    // return JSON to the browser
    res.json(JSON.stringify(obj));
});

// Export the routes
module.exports = router;
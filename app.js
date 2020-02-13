const express = require('express');
const exphbs = require('express-handlebars');
const PORT = process.env.port || 5000;
const path = require('path');

// We bring in the 'routes' that are defined in our other file and assign those functional routes to a variable
const html_router = require('./routes/html_routes');
const api_router = require('./routes/api_routes');

// Create our express instance
const app = express();

// Connecting our static directory files
app.use('/static', express.static(path.join(__dirname, 'public')))

// Express Middleware for declaring Handlebars as the templating engine we want to use
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Standard GET route method call
// app.get("/", (req, res) => {
//     // Render index file to page
//     // Pass object 
//     res.render('index', { name: "Topper" });
// });

// Here we using express middleware and passing logic control over to the file we imported (required) up top
// app.use('<URL_ROUTE>', <VARIABLE_OF_OTHER_ROUTES>) 
app.use('/', html_router);
app.use('/api', api_router);


// Make a connection to our local server
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})
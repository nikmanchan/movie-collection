// requires
const express = require('express');
const app = express();
const bodyParser = require('body-Parser');

// globals
const PORT = process.env.PORT || 5000;
// uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// serve up public files
app.use(express.static('server/public'));

// spin up server
app.listen(PORT, () => {
    console.log('app is running on port:', PORT);
})
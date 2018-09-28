// requires
const express = require('express');
const app = express();
const bodyParser = require('body-Parser');
const moviesRouter = require('./routes/movies.router')
const genresRouter = require('./routes/genres.router')

// globals
const PORT = process.env.PORT || 5000;

// uses
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/movies', moviesRouter);
app.use('/genres', genresRouter);
// app.use('/genres', genresRouter);

// serve up public files
app.use(express.static('server/public'));

// spin up server
app.listen(PORT, () => {
    console.log('app is running on port:', PORT);
})


// requires
const express = require('express');
const pool = require('../modules/pool');
let router = express.Router();

router.post('/', (req,res) => {
    console.log('Posting movie to SQL!');
    
    pool.query(`INSERT INTO "movies"
    ("title", "genre", "release_date", "image_path", "genre_id", "run_time")
    VALUES ($1, $2, $3, $4, $5, $6);`, 
        [req.body.title, 
        req.body.genre, 
        req.body.release_date, req.body.image_path, 
        req.body.genre_id, req.body.run_time])
    .then(() => {
    console.log('movie added!');
    res.sendStatus(200);
    }).catch((error)=> {
        console.log('error with SQL insert for movies', error);
        res.sendStatus(500);
    });
}); // end movies POST


// router.post('/', (req, res) => {


//     pool.query(`INSERT INTO "listings" 
//                 ("cost", "sqft", "type", "city", "image_path")
//                 VALUES ($1, $2, $3, $4, $5);`, [req.body.cost,
//                 req.body.sqft, req.body.type, req.body.city, req.body.image_path])
//         .then(() => {
//             console.log('house added!');
//             res.sendStatus(201);
//         }).catch((error) => {
//             console.log('error with SQL insert for listings', error);
//             res.sendStatus(500);
//         });
        
// });

module.exports = router;

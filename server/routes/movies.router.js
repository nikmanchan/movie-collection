// requires
const express = require('express');
const pool = require('../modules/pool');
let router = express.Router();

router.post('/', (req,res) => {
    console.log('Posting movie to SQL!');
    
    pool.query(`INSERT INTO "movies"
    ("title", "genre_id", "release_date", "image_path", "run_time")
    VALUES ($1, $2, $3, $4, $5);`, 
        [req.body.title, 
        req.body.genre_id, 
        req.body.release_date, req.body.image_path, 
        req.body.run_time])
    .then(() => {
    console.log('movie added!');
    res.sendStatus(200);
    }).catch((error)=> {
        console.log('error with SQL insert for movies', error);
        res.sendStatus(500);
    });
}); // end movies POST

router.get('/', (req,res) => {
    console.log('in GET movies from SQL!');
    
    pool.query(`SELECT "movies"."title", "movies"."release_date", "movies"."image_path", "movies"."genre_id", 
    "movies"."run_time", "movies"."id", "genres"."name" AS "genre" FROM "movies"
    JOIN "genres" ON "movies"."genre_id" = "genres"."id";`)
    .then((results) => {
    console.log('got movies!', results.rows);
    res.send(results.rows);
    }).catch((error)=> {
        console.log('error with GET movies from DB:', error);
        res.sendStatus(500);
    });
}); // end movies GET

router.delete('/', (req, res)=>{
    console.log('in DELETE movie in SQL');
    // let id = req.params.id
    pool.query(`DELETE from "movies" WHERE "id" = $1;`, [req.query.id])
    .then( (results)=>{
        console.log('delete success!');
        res.sendStatus(200);
    }).catch( (error)=> {
        console.log('error deleting movie from database:', error);
    });  
}); // end router.delete

router.delete('/', (req, res)=>{
    console.log('in DELETE genre in SQL');
    // let id = req.params.id
    pool.query(`DELETE from "movies" WHERE "id" = $1;`, [req.query.id])
    .then( (results)=>{
        console.log('delete success!');
        res.sendStatus(200);
    }).catch( (error)=> {
        console.log('error deleting genre from database:', error);
    });  
}); // end router.delete

module.exports = router;

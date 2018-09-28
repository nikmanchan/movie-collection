// requires
const express = require('express');
const pool = require('../modules/pool');
let router = express.Router();

router.post('/', (req,res) => {
    console.log('Posting genre to SQL!');
    
    pool.query(`INSERT INTO "genres"
    ("name")
    VALUES ($1);`, 
        [req.body.name])
    .then(() => {
    console.log('genre added!');
    res.sendStatus(200);
    }).catch((error)=> {
        console.log('error with SQL insert for genres', error);
        res.sendStatus(500);
    });
}); // end genres POST

router.get('/', (req,res) => {
    console.log('in GET genres from SQL!');
    
    pool.query(`SELECT * FROM "genres"`)
    .then((results) => {
    console.log('got genres!', results.rows);
    res.send(results.rows);
    }).catch((error)=> {
        console.log('error with GET genres from DB:', error);
        res.sendStatus(500);
    });
}); // end genres GET

router.delete('/', (req, res)=>{
    console.log('in DELETE genre in SQL');
    // let id = req.params.id
    pool.query(`DELETE from "genres" WHERE "id" = $1;`, [req.query.id])
    .then( (results)=>{
        console.log('delete success!');
        res.sendStatus(200);
    }).catch( (error)=> {
        console.log('error deleting genre from database:', error);
    });  
}); // end router.delete

module.exports = router;

const express = require('express');//1-pati pradzia
const app = express();//1-pati pradzia
const port = 3003;//1-pati pradzia
const cors = require('cors');//1-pati pradzia (cors naudojamasdel saugumo)
app.use(cors());//1-pati pradzia
const mysql = require('mysql');//1-pati pradzia
md5 = require('js-md5');//1-pati pradzia
const uuid = require('uuid');//1-pati pradzia

app.use(express.urlencoded({//1-pati pradzia
    extended: true
}));
    
app.use(express.json());//1-pati pradzia

const con = mysql.createConnection({ //1-pati pradzia(irasom duomenu bazes pavadinima)
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'manikiuras',   
});
 
app.get('/', (req, res) => {//1-pati pradzia
  res.send('Hello World!');
})

app.get('/manikiuro-salonas', (req, res) => { //2 bendraujam su serveriu   //1-pati pradzia     <- http://localhost:3003/trees-manager api puslapio pavadinimas
// SELECT column1, column2, ...
// FROM table_name;       trees <- lenteles pavadinimas(issitrint komentara sita nes nepasileis)
const sql = `
SELECT
*
FROM salonas
`;
con.query(sql, function(err, result) {
if (err) throw err;
res.json(result);
});
});



app.listen(port, () => {//1-pati pradzia
  console.log(`Example app listening on port ${port}`);
})

//pati pradia kuria reik jau tureti egze
/*
const express = require('express');//1-pati pradzia
const app = express();//1-pati pradzia
const port = 3003;//1-pati pradzia
const cors = require('cors');//1-pati pradzia (cors naudojamasdel saugumo)
app.use(cors());//1-pati pradzia
const mysql = require('mysql');//1-pati pradzia
md5 = require('js-md5');//1-pati pradzia
const uuid = require('uuid');//1-pati pradzia

app.use(express.urlencoded({//1-pati pradzia
    extended: true
}));
    
app.use(express.json());//1-pati pradzia

const con = mysql.createConnection({ //1-pati pradzia(irasom duomenu bazes pavadinima)
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'sernas',   
});
 
app.get('/', (req, res) => {//1-pati pradzia
  res.send('Hello World!');
})

app.get('/trees-manager', (req, res) => {    //1-pati pradzia     <- http://localhost:3003/trees-manager api puslapio pavadinimas
// SELECT column1, column2, ...
// FROM table_name;       trees <- lenteles pavadinimas(issitrint komentara sita nes nepasileis)
const sql = `
SELECT
*
FROM medziai
`;
con.query(sql, function(err, result) {
if (err) throw err;
res.json(result);
});
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
*/
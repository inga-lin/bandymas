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
////////////////////////////
////////////////////////////
//Read //2 bendraujam su serveriu ir issitraukiam info is savo D.B.///////
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

////////////////////////////
/////////////////////////
  //Create lenteles itasymas
  //3.mygtuko paspaudimas- kuris is Create.jsx paims informaciaj (kai paspausim mygtuka) ir ja issius ir irasys i serveri////
//3.Create.jsx info isaugojimas serveryje
app.post('/manikiuro-salonas', (req, res) => { //2 bendraujam su serveriu   //1-pati pradzia     <- http://localhost:3003/trees-manager api puslapio pavadinimas
  
  const sql = `
  INSERT INTO salonas
  (vardas, tipas, kaina, trukme)
  VALUES (?, ?, ?, ?)
  `;
  con.query(
    sql,
    [req.body.vardas, req.body.tipas, !req.body.kaina ? 0 : req.body.kaina, !req.body.trukme ? 0 : req.body.trukme], //jeigu tuscias trukmes ir kaina laukelis bus 0
    (err, results) => {
      if (err) {
        throw err;
      }
      res.send(results);
    }
  );
});
////////////////////////////
////////////////////////////
//deletle-mygtukas
////6.Istrinimo mygtukas is ManikiuroListoAtvaizdavimas.jsx kuris istrins visa jo info///
app.delete('/manikiuro-salonas/:id', (req, res) => { //delytinam is trees lnteles kurio id yra ?(kazkoks)
  const sql = `
      DELETE FROM salonas
      WHERE id = ?
      `;
  con.query(sql, [req.params.id], (err, result) => { //[req.params.id] yra = '/trees-manager/:id'
      if (err) {
          throw err;
      }
      res.send(result);
  })
})
////////////////////////////
////////////////////////////
//edit(redaguoti) mygtukas
////8.Create paspaudus redaguoti(edit) Modale keiciami duomenys ir atvaizduojami Creat o liste/////
//buvo tik saugojimas be nuotraukos MODALO
app.put("/manikiuro-salonas/:id", (req, res) => {
const sql = `
UPDATE salonas
SET vardas = ?, tipas = ?, kaina = ?, trukme = ? 
WHERE id = ?
`;
  con.query(
  sql,
  [req.body.vardas, req.body.tipas, req.body.kaina, req.body.trukme,  req.params.id],
  (err, results) => {
    if (err) {
      throw err;
    }
    res.send(results);
  }
);
});
/////////////////////////
//////////////////////////

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
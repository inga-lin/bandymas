const express = require('express');//1-pati pradzia
const app = express();//1-pati pradzia
const port = 3003;//1-pati pradzia

app.get('/', (req, res) => {//1-pati pradzia
  res.send('Hello World!');
})

app.listen(port, () => {//1-pati pradzia
  console.log(`Example app listening on port ${port}`);
})

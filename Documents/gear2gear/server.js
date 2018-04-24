const express = require('express');
const path = require('path');
const http = require('http')
const port = process.env.PORT || '3001';

//const api = require('./server/routes/api');
const app=express();

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


app.set('port',port);

const server = http.createServer(app);
server.listen(port, () => console.log("running"));

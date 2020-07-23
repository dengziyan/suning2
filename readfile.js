const express=require('express');
const app=express();


app.use('/',express.static('./yyyyy'))
app.listen('8080','192.168.1.22');
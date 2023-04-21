const express = require('express');

const app = express();

const port = 8080;

app.listen(port , function(err){
    if(err){
        console.log(`error in running server : ${err}`);
        return ;
    }
    console.log(`server is up and running on port : ${port}`);
})
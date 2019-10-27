require('dotenv').config();
const http = require('http');
const express = require('express');
const cors = require('cors');
const app = express();
const fs = require('fs');

app.use(cors());
app.use(express.static('website'));

var server = app.listen(process.env.PORT || 80, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log("App listening at http://%s:%s", host, port);
})
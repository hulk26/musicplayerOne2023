const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const fs = require('fs')
const {google} = require ('googleapis');
require('dotenv').config();


let CLIENT_ID = process.env.CLIENTID;
let CLIENT_SECRET =  process.env.CLIENTSECRET;
let REDIRECT_URI =  process.env.REDIRECTURI;
let REFRESH_TOKEN =  process.env.REFRESHTOKEN;

const oauth2Client = new google.auth.OAuth2
(
    CLIENT_ID,
    CLIENT_SECRET,
    REDIRECT_URI
);

oauth2Client.setCredentials({refresh_token:REFRESH_TOKEN});


const drive = google.drive({
version:'v3',
auth: oauth2Client
});

const app = express();
app.set("view engine","html");
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

app.use(express.static('public'));

app.listen(3000,(req,res)=>{
console.log("server running on port 3000 ");
})



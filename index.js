const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const presidentialServices = require('./services/presidentialService');
presidentialServices.createServices(app);


const PORT = process.env.PORT || 8080; 

app.listen(PORT, ()=>{
    console.log("El servidor esta preparado");
});
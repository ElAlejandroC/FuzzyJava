const express = require('express');
var nj = require('numjs')
const cors = require("cors")
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors())


//views
app.use('/views',express.static(__dirname+'/views'));

//renderizacion
app.get('/',(req, res)=>{
    res.sendFile('index.html',{root:__dirname})
});
//mat
const mat = require('./routes/mat')


//Jsons
app.get('/sintomas', (req,res)=>{
    res.sendFile('config/enfermedades.json',{root: __dirname})
});

app.use("/routes/mat", mat)


app.listen(3000, () => {
    console.log("Servidor arriba");
});


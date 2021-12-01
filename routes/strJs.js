var express = require('express')
var strJs = express.Router();

strJs.post("/recibir",async(req,res,next)=>{
    const{sim_1, sim_2, sim_3} = req.body;
    console.log("valor 1 es de",sim_1)
})

//respuesta
module.exports = strJs
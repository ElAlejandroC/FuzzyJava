'use strict';
var arregloP = []



function tarjeta(){
    document.getElementById('ventana').style.display ='block';
}
function cerrar(){
    document.getElementById('ventana').style.display ='none';
}

function validar(){
    //sintomas
    var cansancio = document.getElementById('cansancio').value * 0.1
    var articulacion = document.getElementById('articulacion').value * 0.1
    var fiebre = document.getElementById('fiebre').value * 0.1
    var glandulas = document.getElementById('glandulas').value * 0.1
    var extremidades = document.getElementById('extremidades').value * 0.1
    var vision = document.getElementById('vision').value * 0.1
    var espasmos = document.getElementById('espasmos').value * 0.1
    var rigidez = document.getElementById('rigidez').value * 0.1
    var cabello =  document.getElementById('cabello').value * 0.1
    var tragar = document.getElementById('tragar').value * 0.1
    var respirar = document.getElementById('respirar').value * 0.1
    var ojos = document.getElementById('ojos').value * 0.1
    var tos = document.getElementById('tos').value * 0.1
    var vomitos = document.getElementById('vomitos').value * 0.1
    var diarrea = document.getElementById('diarrea').value * 0.1

    //arreglo
    const array1 = []
    const arreglo = array1.concat(cansancio, articulacion, fiebre, glandulas, extremidades, vision, espasmos, rigidez, cabello, tragar, respirar, ojos, tos, vomitos, diarrea)

    //enfermedades
      
    var diabetes = 0
    if(document.getElementById('diabetes').checked){
        diabetes = 1
    }else{
        diabetes = 0
    }

    if(document.getElementById('esclerosis').checked){
        var esclerosis = 1
    }else{
        var esclerosis = 0
    }
    
    if(document.getElementById('lupus').checked){
        var lupus = 1
    }else{
        var lupus = 0
    }
    
    if(document.getElementById('miastenia').checked){
        var miastenia = 1
    }else{
        var miastenia = 0
    }
    
    if(document.getElementById('espondielitis').checked){
        var espondielitis = 1
    }else{
        var espondielitis = 0
    }
    
    if(document.getElementById('artritis').checked){
        var artritis = 1
    }else{
        var artritis = 0
    }
    
    if(document.getElementById('addison').checked){
        var addison = 1
    }else{
        var addison = 0
    }
    
    if(document.getElementById('tiroiditis').checked){
        var tiroiditis = 1
    }else{
        var tiroiditis = 0
    }
    
    if(document.getElementById('sjorgen').checked){
        var sjorgen = 1
    }else{
        var sjorgen = 0
    }
    
    if(document.getElementById('celiaca').checked){
        var celiaca = 1
    }else{
        var celiaca = 0
    }


    var array2 = []
    var arregloP = array2.concat(diabetes,esclerosis,lupus,miastenia,espondielitis,artritis,addison,tiroiditis,sjorgen,celiaca)



    //prueba
    console.log(arreglo)
    console.log(arregloP)


    //envio
    axios({
        method: 'post',
        url:'http://localhost:3000/routes/mat/recibir',
        data:{
            answers:arreglo,
            diseases:arregloP
        }
    }).then(function(res){
        console.log(res);
        alert("Respuestas enviadas con exito")
    }).catch(function(err){
        alert("Ocurrio un pedo")
        console.log(err)
    })
    tarjeta()
    tomarPapu()
}
var bandera = 1
var tituloDin = document.getElementById('tituloDin').value
function friend(){
    bandera++
    if(bandera % 2 == 0){
        document.getElementById('tituloDin').innerHTML=`<h4>Examen especifico</h4>`
        document.getElementById('formulario').style.display ='block';
    }else{
        document.getElementById('tituloDin').innerHTML=`<h4>Examen General</h4>`
        document.getElementById('formulario').style.display ='none';
        //arregloP:[0,0,0,0,0,0,0,0,0,0]
    }
}


async function tomarPapu(){
    var recibe = 0;
    const results = await axios.post("http://localhost:3000/routes/mat/recibir",{data:recibe},
    )
    console.log(results)
}

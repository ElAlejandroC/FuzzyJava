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
app.post('/mat',(req,res, next)=>{
    const{answers,diseases} = req.body;

    inter=nj.zeros([10,15]);
    
    //Matriz precargada
    var pre= nj.array([
                    [0.9, 0  , 0  , 0.7, 0.3, 0.9, 0.4, 0  , 0.3, 0  , 0  , 0.7, 0  , 0.1, 0.6],
                    [0.7, 0.9, 0.2, 0.4, 0.6, 0.9, 0.9, 0.3, 0.1, 0  , 0  , 0  , 0  , 0.2, 0.2],
                    [0.7, 0.4, 0.7, 0.6, 0.7, 0.7, 0.4, 0.4, 0.7, 0  , 0  , 0.7, 0  , 0.3, 0.1],
                    [0.6, 0.5, 0  , 0.6, 0.5, 0  , 0.2, 0.6, 0  , 0.9, 0.9, 0.9, 0  , 0  , 0  ],
                    [0.8, 0.9, 0.4, 0.1, 0.9, 0  , 0.3, 0.9, 0  , 0  , 0  , 0  , 0  , 0  , 0  ],
                    [0.5, 0.9, 0.4, 0.3, 0.9, 0.6, 0.7, 0.3, 0  , 0  , 0  , 0  , 0  , 0  , 0  ],
                    [0.9, 0.3, 0.5, 0.9, 0.4, 0  , 0.4, 0.4, 0  , 0  , 0  , 0  , 0.2, 0.5, 0.6],
                    [0.9, 0.3, 0  , 0.2, 0.2, 0  , 0.9, 0  , 0.9, 0  , 0.3, 0  , 0.4, 0  , 0.1],
                    [0.5, 0.7, 0  , 0.8, 0.5, 0  , 0  , 0  , 0  , 0  , 0  , 0.9, 0.9, 0  , 0  ],
                    [0.4, 0.4, 0.7, 0.1, 0  , 0  , 0.5, 0  , 0  , 0  , 0.6, 0  , 0.5, 0.9, 0.9]
                    ])
                
    //Arreglo sintomas de usuario
    var sint = nj.array(answers);

    //Arreglo enfermedades seleccionadas del usuario
    var diseasesarr = nj.array(diseases);

    //Matriz interseccion diagnostico general, especifico
    intergen=nj.zeros([10,15]);

    //Matriz para guardar resultados
    var diagresultsgen= nj.array([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 1, 1]
    ])
    

    var sumdiseases = diseasesarr.sum()
    
    var cont = 0;

    //Interseccion Especifico y general
    for(var i = 0; i<10; i++){
        for(var j = 0; j < 15; j++){
            if(sumdiseases > 0){
                cont += 1;
                if(diseasesarr.get(i) == 1){
                    if( pre.get(i,j) >= sint.get(j)){
                        intergen.set(i,j,sint.get(j));
                    }else{
                        intergen.set(i,j,pre.get(i,j))
                    }
                }
            }else{
                if(diseasesarr.get(i) == 0){
                    if( pre.get(i,j) >= sint.get(j)){
                        intergen.set(i,j,sint.get(j));
                    }else{
                        intergen.set(i,j,pre.get(i,j))
                    }
                }
            }
        }
    }


    //Definir umbral
    var umbral = 3;
    var contresults = 0;
    
    var sumgen = 0;
    //Suma de intersecciones general/especifico
    for(var i = 0; i<10; i++){
        for(var j = 0; j < 15; j++){
            sumgen+=intergen.get(i,j)
        }
        diagresultsgen.set(1,i,sumgen)
        if(sumgen >= umbral){
            contresults+=1;
        }
        sumgen=0;
    }
    
    //Ordenar valores de interseccion
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            //ordenar suma de intersecciones
            if ( diagresultsgen.get(1, j) <  diagresultsgen.get(1, j+1)) {
                let tmp =  diagresultsgen.get(1, j);
                diagresultsgen.set(1, j,  diagresultsgen.get(1, j+1));
                diagresultsgen.set(1, j+1, tmp)
            
                //Ordenar enfermedad
                let tmp2 =  diagresultsgen.get(0, j);
                diagresultsgen.set(0, j,  diagresultsgen.get(0, j+1));
                diagresultsgen.set(0, j+1, tmp2)
            }
        }
    }

    console.log("ordenado", diagresultsgen)

   //Arreglo resultado final
   var resultarray=nj.zeros([0,contresults]);
   var contaux = 0;

   //Crear arreglo con resultados finales con enfremedades que superan el umbral
   for (let i = 0; i < 10; i++){
       if(diagresultsgen.get(1, i) >= umbral){
            resultarray.set(0, contaux ,diagresultsgen.get(0,i))
            contaux+=1;
       }
   }
   console.log("resultado final", resultarray)
   
   return res.send(resultarray.selection.data)
  //var arregloo = resultarray.tolist()
  //console.log(arregloo)

  //res.status(200).send({message:arregloo})
   
})

//Jsons
app.get('/sintomas', (req,res)=>{
    res.sendFile('config/enfermedades.json',{root: __dirname})
});


app.listen(3000, () => {
    console.log("Servidor arriba");
});


const express = require('express');
const nj = require("numjs")
const mat = express.Router();

mat.post("/recibir",async(req,res,next)=>{
    const{arreglo_f} = req.body;
    const{arreglo_P} = req.body;

    console.log(arreglo_f)

    inter=nj.zeros([10,15]);
    //diagresults=nj.zeros([1,10]);

    //Matriz para guardar resultados
    var diagresults= nj.array([
        [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ])
    
    var sum=0;
    
    //Matriz precargada
    var pre= nj.array([
                    [0.8, 0  , 0.6, 0  , 0.4, 0  , 0  , 0.6, 0.8, 0.7, 0.8, 0.6, 0  , 0  , 0  ],
                    [0  , 0.6, 0.8, 0.8, 0.7, 0  , 0  , 0.4, 0.6, 0.5, 0.4, 0.7, 0  , 0  , 0.5],
                    [0  , 0.8, 0.4, 0.7, 0.5, 0  , 0  , 0.7, 0  , 0.7, 0.5, 0  , 0  , 0.4, 0  ],
                    [0  , 0.2, 0.9, 0.5, 0.7, 0.8, 0  , 0.4, 0  , 0  , 0.9, 0  , 0  , 0  , 0  ],
                    [0  , 0  , 0.8, 0.3, 0.7, 0  , 0  , 0.7, 0.5, 0.7, 0.7, 0  , 0  , 0  , 0  ],
                    [0.9, 0.6, 0.5, 0.4, 0.6, 0.9, 0  , 0.8, 0.7, 0.2, 0.8, 0.5, 0  , 0  , 0  ],
                    [0  , 0  , 0.4, 0  , 0.7, 0  , 0  , 0.6, 0.9, 0.6, 0  , 0  , 0.8, 0  , 0.9],
                    [0.7, 0.7, 0.8, 0.9, 0.5, 0.5, 0  , 0.6, 0.7, 0.4, 0.6, 0.6, 0  , 0.6, 0  ],
                    [0  , 0  , 0.5, 0.6, 0.8, 0  , 0.8, 0.6, 0.9, 0.6, 0  , 0.8, 0  , 0  , 0  ],
                    [0  , 0.6, 0.9, 0  , 0.6, 0  , 0  , 0.7, 0.9, 0.9, 0  , 0.8, 0  , 0  , 0  ]
                    ])
                
    //Arreglo sintomas de usuario
    var sint = nj.array(arreglo_f);
                
    //Interseccion
    for(var i = 0; i<10; i++){
        for(var j = 0; j < 15; j++){
            if( pre.get(i,j) >= sint.get(j)){
                inter.set(i,j,sint.get(j));
            }else{
                inter.set(i,j,pre.get(i,j))
            }
        }
    }
    
    //Suma de intersecciones
    for(var i = 0; i<10; i++){
        for(var j = 0; j < 15; j++){
            sum+=inter.get(i,j)
        }
        diagresults.set(1,i,sum)
        sum=0;
    }
    

    
    //Ordenar valores de interseccion
    for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
            //ordenar suma de intersecciones
            if (diagresults.get(1, j) < diagresults.get(1, j+1)) {
                let tmp = diagresults.get(1, j);
                diagresults.set(1, j, diagresults.get(1, j+1));
                diagresults.set(1, j+1, tmp)
            
                //Ordenar enfermedad
                let tmp2 = diagresults.get(0, j);
                diagresults.set(0, j, diagresults.get(0, j+1));
                diagresults.set(0, j+1, tmp2)
            }
        }
    }
    console.log(diagresults)
    console.log(arreglo_P)
})


module.exports = mat
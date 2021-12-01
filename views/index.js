'use strict';
var arregloP = []



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
        console.log(res.data);
        var dis = res.data
        var tam = res.data.length
        console.log(tam)

        for(var i=0; i<tam; i++){
            console.log(dis[i])
            switch(dis[i]){
                case 0:
                    console.log("diabetes")
                    let newElement = document.createElement('div');
                    newElement.classList.add("ventana");
                    newElement.innerHTML = `
                    <h1>Diabetes</h1>
                    <h2>Resumen<h2>
                    <h3>Los diabéticos tipo 1 sintetizan muy poca o ninguna insulina. Todas las células beta del páncreas productoras de insulina que tienen en el momento del diagnóstico se destruyen por completo en un periodo de 5 a 10 años, dejándolos totalmente dependientes de inyectarse insulina para vivir.</h3>
                    <h2>Sintomas<h2>
                    <h3>Aumento de la sed, necesidad de orinar a menudo, incontinencia urinaria en niños que anteriormente no mojaban la cama durante la noche, hambre extrema, adelgazamiento no intencional, pérdida de peso sin causa aparente, irritabilidad y otros cambios de humor, fatiga y debilidad, llagas que tardan en cicatrizar, visión borrosa, infecciones frecuentes</h3>
                    <h2>Tratamiento</h2>
                    <h3>El tratamiento de la diabetes se basa en la monitorización diaria de la concentración de glucosa, una dieta sana y planificada y ejercicio físico regular.</h3>
                    </div>
                    </div>`
                    document.body.appendChild(newElement)
                    
                break;
                case 1:
                    console.log("esclerosis")
                    let newElement1 = document.createElement('div');
                    newElement1.classList.add("ventana");
                    newElement1.innerHTML = `
                    <h1>Esclerosis</h1>
                    <h2>Resumen<h2>
                    <h3>La esclerosis múltiple (EM) es una enfermedad crónica que afecta al sistema nervioso central. Da lugar a inflamación y destrucción de la mielina.</h3>
                    <h2>Sintomas<h2>
                    <h3>Entumecimiento, hormigueo, dolor, picor, sensación de quemazón, dolor facial y alteraciones visuales, alteraciones del habla, debilidad, temblor, dificultad para caminar, falta de coordinación, estreñimiento, cambios de humor, depresión, capacidad de pensar, memoria, fatiga, sensibles a los cambios de temperatura.</h3>
                    <h2>Tratamiento</h2>
                    <h3>La EM no puede curarse, el tratamiento consisten en enlentecer la progresión de la enfermedad, mejorar los síntomas y minimizar los efectos de las crisis o ataques agudos.</h3>
                    </div>`
                    document.body.appendChild(newElement1)
                    
                break;
                case 2:
                    console.log("lupus")
                    let newElement2 = document.createElement('div');
                    newElement2.classList.add("ventana");
                    newElement2.innerHTML = `
                    <h1>Lupus</h1>
                    <h2>Resumen<h2>
                    <h3>El lupus es un trastorno autoinmune inflamatorio crónico. El lupus aparece porque el sistema inmune, que normalmente protege al organismo frente a infecciones, produce una respuesta inmune inadecuada dirigida contra los propios tejidos del individuo. </h3>
                    <h2>Sintomas<h2>
                    <h3>Los signos y síntomas del lupus son muy variables, y entre ellos se incluyen: dolor muscular, dolor de tipo artrítico en una o varias articulaciones, erupción característica en forma de mariposa en la nariz y mejillas, fiebre, fatiga persistente, hipersensibilidad a la luz ultravioleta, fenómeno de Raynaud, pérdida de cabello, dolor torácico, anemia, úlceras en la boca, inflamación y lesión de órganos y tejidos, como riñones, pulmones, corazón, capas de revestimiento del corazón, sistema nervioso central y vasos sanguíneos.</h3>
                    <h2>Tratamiento</h2>
                    <h3>El lupus es una enfermedad incurable, aunque en muchos individuos los síntomas pueden remitir entre las exacerbaciones. Los objetivos del tratamiento consisten en aliviar los síntomas, minimizar las exacerbaciones y las complicaciones, y tratar las complicaciones asociadas a la enfermedad en caso de que se produzcan.Se recomienda a las personas afectadas descansar suficientemente, practicar ejercicio físico, evitar el estrés y la exposición a la luz solar. Se pueden administrar fármacos para aliviar el dolor, reducir la inflamación y abordar correctamente posibles complicaciones.</h3>
                    </div>`
                    document.body.appendChild(newElement2)

                break;
                case 3:
                    console.log("miastenia")
                    let newElement3 = document.createElement('div');
                    newElement3.classList.add("ventana");
                    newElement3.innerHTML = `
                    <h1>Miastenia Gravis</h1>
                    <h2>Resumen<h2>
                    <h3>Enfermedad autoinmune de carácter neuromuscular y crónica que se caracteriza por presentar debilidad de los músculos esqueléticos (voluntarios) del cuerpo en diferentes grados. La debilidad muscular aumenta durante los períodos de actividad y disminuye después de períodos de descanso.</h3>
                    <h2>Sintomas<h2>
                    <h3>El cuadro clínico se caracteriza por debilidad y fatigabilidad muscular variable, siempre en relación con la realización de actividad física, sus primeros síntomas son la caída de los párpados y la visión doble o diplopía, la debilidad de los músculos bulbares puede producir dificultad para hablar, para la masticación y la deglución.</h3>
                    <h2>Tratamiento</h2>
                    <h3>Los anticolinesterásicos son el grupo de fármacos de primera elección y su acción consiste en bloquear la degradación de la acetilcolina por medio de la enzima colinesterasa. Este tipo de fármacos ayuda a que exista más acetilcolina disponible para que el músculo trabaje mejor.</h3>
                    </div>`
                    document.body.appendChild(newElement3)
                break;
                case 4:
                    console.log("espondielitis")
                    let newElement4 = document.createElement('div');
                    newElement4.classList.add("ventana");
                    newElement4.innerHTML = `
                    <h1>Espondielitis anquilosante</h1>
                    <h2>Resumen<h2>
                    <h3>La espondilitis anquilosante (EA) es una forma de artritis que afecta a la columna y constituye una condición crónica. Ocasiona una inflamación dolorosa de las articulaciones de la columna vertebral y de las que existen entre la parte inferior de la columna vertebral y la pelvis.</h3>
                    <h2>Sintomas<h2>
                    <h3>Dolor, rigidez en tendones y ligamentos, dolor en las zonas con cartílago, fiebre, cansancio, pérdida de apetito, inflamación y dolor en (también pierden capacidad de movimiento), hombros, rodillas, tobillos, dedos de pies y manos</h3>
                    <h2>Tratamiento</h2>
                    <h3>A pesar de que la espondilitis anquilosante o anquilopoyética (EA) no se puede curar, el ejercicio y la actividad física ayudan a prevenir la rigidez articular. Se prescriben fármacos para aliviar el dolor y la inflamación</h3>
                    </div>
                    </div>`
                    document.body.appendChild(newElement4)
                break;
                case 5:
                    console.log("artritis")
                    let newElement5 = document.createElement('div');
                    newElement5.classList.add("ventana");
                    newElement5.innerHTML = `
                    <h1>Artitis</h1>
                    <h2>Resumen<h2>
                    <h3>La artritis reumatoidea (AR) es una enfermedad que lleva a la inflamación de las articulaciones y tejidos circundantes. Es una enfermedad prolongada. También puede afectar otros órganos.</h3>
                    <h2>Sintomas<h2>
                    <h3>Suele afectar a varias articulaciones y de manera simétrica, con más frecuencia manos y muñecas, pero también codos, cuello, hombros, caderas, rodillas y pies, fatiga, fiebre, desarrollo de nódulos subcutáneos especialmente en los codos y malestar general, anemia, complicaciones sistémicas y otros síntomas o signos asociados a otros trastornos autoinmunes."</h3>
                    <h2>Tratamiento</h2>
                    <h3>Actualmente no puede curarse, los objetivos del tratamiento se centran en disminuir la progresión de la enfermedad, en aliviar el dolor y disminuir la inflamación, en mantener el funcionalismo de las articulaciones afectadas y minimizar las lesiones y complicaciones articulares. El tratamiento varía de persona a persona y a menudo a lo largo del tiempo para un mismo individuo.</h3>
                    </div>
                    </div>`
                    document.body.appendChild(newElement5)
                break;
                case 6:
                    console.log("enfermedad")
                    let newElement6 = document.createElement('div');
                    newElement6.classList.add("ventana");
                    newElement6.innerHTML = `
                    <h1>Enfermedad de Addison</h1>
                    <h2>Resumen<h2>
                    <h3>La insuficiencia adrenal (o suprarrenal) y la enfermedad de Addison son trastornos endocrinos u hormonales en los que el organismo no produce cantidad suficiente de hormonas suprarrenales como cortisol y aldosterona.</h3>
                    <h2>Sintomas<h2>
                    <h3>Los signos y síntomas asociados suelen ser inespecíficos, pueden aparecer de manera insidiosa y lentamente, manifestándose ante situaciones de estrés, los síntomas se incluyen: dolor abdominal, disminución del vello corporal, deshidratación en la enfermedad de Addison, diarrea o estreñimiento, mareos y desmayos, fatiga o debilidad extrema, hiperpigmentación, manchas oscuras en la piel, dolores musculares y articulares, alteraciones de la presión sanguínea y del ritmo cardíaco, hipoglucemia, debilidad muscular, deseo imperioso de consumo de sal, vómitos, pérdida de peso.</h3>
                    <h2>Tratamiento</h2>
                    <h3>El tratamiento de la insuficiencia adrenal supone la administración de hormonas de sustitución. El tipo de tratamiento depende de si falta cortisol, aldosterona o ambos. A veces se puede recuperar en parte la función adrenal cuando la causa de la afectación es una infección, al resolverse esta última adecuadamente.</h3>
                    </div>
                    </div>`
                    document.body.appendChild(newElement6)
                break;
                case 7:
                    console.log("tiroiditis")
                    let newElement7 = document.createElement('div');
                    newElement7.classList.add("ventana");
                    newElement7.innerHTML = `
                    <h1>Tiroiditis de Hashimoto</h1>
                    <h2>Resumen<h2>
                    <h3>"La tiroiditis de Hashimoto es una enfermedad autoinmune, constituye la forma más común de inflamación de la glándula tiroides (tiroiditis) y la causa más frecuente de hipotiroidismo. La tiroides es una glándula pequeña en forma de mariposa, localizada en la base de la garganta, justo por debajo de la nuez. Esta glándula tiene un papel muy importante en el control del metabolismo del organismo mediante la producción de hormonas tiroideas.</h3>
                    <h2>Sintomas<h2>
                    <h3>Entre los signos y síntomas se incluyen: estreñimiento. depresión. sequedad de la piel. cansancio, fatiga, pérdida de memoria, intolerancia al frío, en las mujeres, menstruaciones más frecuentes o irregulares, dolor en músculo y articulaciones, debilidad muscular, lentitud, cabello fino, pérdida de cabello, aumento de peso, en las embarazadas riesgo de aborto.</h3>
                    <h2>Tratamiento</h2>
                    <h3>No se puede curar, pero la enfermedad puede ser controlada, cuando disminuye la producción de hormonas tiroideas y los síntomas van empeorando, está indicado el tratamiento hormonal sustitutivo con hormonas tiroideas. Se puede utilizar levotiroxina, que es una T4 sintética y que se toma en forma de píldoras. La medicación reemplaza la hormona que tu tiroides no puede sintetizar, y probablemente deberás tomarla durante toda la vida.</h3>
                    </div>
                    </div>`
                    document.body.appendChild(newElement7)
                break;
                case 8:
                    console.log("sjorgren")
                    let newElement8 = document.createElement('div');
                    newElement8.classList.add("ventana");
                    newElement8.innerHTML = `
                    <h1>sindrome de Sjogren</h1>
                    <h2>Resumen<h2>
                    <h3>El Síndrome de Sjögren es una enfermedad autoinmune en la que el sistema inmunitario del organismo reacciona erróneamente contra los tejidos glandulares propios, tales como las glándulas salivales y lacrimales.</h3>
                    <h2>Sintomas<h2>
                    <h3>Entre los signos y síntomas se incluyen: estreñimiento. depresión. sequedad de la piel. cansancio, fatiga, pérdida de memoria, intolerancia al frío, en las mujeres, menstruaciones más frecuentes o irregulares, dolor en músculo y articulaciones, debilidad muscular, lentitud, cabello fino, pérdida de cabello, aumento de peso, en las embarazadas riesgo de aborto.</h3>
                    <h2>Tratamiento</h2>
                    <h3>La enfermedad no tiene curación. El tratamiento varía en función de la gravedad de los síntomas, y consiste en aliviar dichos síntomas y prevenir o minimizar las lesiones en los tejidos, como por ejemplo en la superficie ocular.</h3>
                    </div>
                    </div>`
                    document.body.appendChild(newElement8)
                break;
                case 9:
                    console.log("celiaca")
                    let newElement9 = document.createElement('div');
                    newElement9.classList.add("ventana");
                    newElement9.innerHTML = `
                    <h1>Enfermedad Celiaca</h1>
                    <h2>Resumen<h2>
                    <h3>La enfermedad celíaca tiene una base autoinmune y se caracteriza por una respuesta inmune inapropiada al gluten -proteína presente en el trigo- y a otras proteínas de la dieta halladas en alimentos como la cebada y el centeno. Esta respuesta conduce a una inflamación del intestino delgado y a una lesión y destrucción de las vellosidades que recubren la pared intestinal.</h3>
                    <h2>Sintomas<h2>
                    <h3>Entre los signos y síntomas de enfermedad celíaca se incluyen: dolor y distensión abdominal, diarrea crónica, heces grasientas y malolientes, vómitos, anemia por déficit de hierro que no responde a tratamiento con suplementos férricos, tendencia a sangrar, dolores articulares y óseos, fatiga, debilidad, dificultad para concentrarse, úlceras bucales, pérdida de peso, alteraciones del esmalte dental, osteoporosis.</h3>
                    <h2>Tratamiento</h2>
                    <h3>Los individuos con enfermedad celíaca deben seguir una dieta libre de gluten, normalmente durante toda la vida. Suele ser necesario consultar con un dietista y ser muy cuidadoso con la composición de todos los alimentos que se ingieren para garantizar una recuperación completa. Cuando se suprimen todas las posibles fuentes de trigo, cebada y centeno, los niveles de autoanticuerpos empiezan a disminuir y la lesión intestinal se resuelve.</h3>
                    </div>
                    </div>`
                    document.body.appendChild(newElement9)
                break;
            }
        }
        
    }).catch(function(err){
        alert("Ocurrio un problema")
        console.log(err)
    })


    //for(var i; i>tam; i+)
}
function tarjeta(){
    const div = document.createElement("div");
            div.classList.add("ventana");
            div.innerHTML = `
                <div class="ventana" id="ventana">
                <h1>Diabetes tipo 1</h1>
                </div
                </div>`;
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

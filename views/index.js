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
        url:'/mat',
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
                    <h3>Los diab??ticos tipo 1 sintetizan muy poca o ninguna insulina. Todas las c??lulas beta del p??ncreas productoras de insulina que tienen en el momento del diagn??stico se destruyen por completo en un periodo de 5 a 10 a??os, dej??ndolos totalmente dependientes de inyectarse insulina para vivir.</h3>
                    <h2>Sintomas<h2>
                    <h3>Aumento de la sed, necesidad de orinar a menudo, incontinencia urinaria en ni??os que anteriormente no mojaban la cama durante la noche, hambre extrema, adelgazamiento no intencional, p??rdida de peso sin causa aparente, irritabilidad y otros cambios de humor, fatiga y debilidad, llagas que tardan en cicatrizar, visi??n borrosa, infecciones frecuentes</h3>
                    <h2>Tratamiento</h2>
                    <h3>El tratamiento de la diabetes se basa en la monitorizaci??n diaria de la concentraci??n de glucosa, una dieta sana y planificada y ejercicio f??sico regular.</h3>
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
                    <h3>La esclerosis m??ltiple (EM) es una enfermedad cr??nica que afecta al sistema nervioso central. Da lugar a inflamaci??n y destrucci??n de la mielina.</h3>
                    <h2>Sintomas<h2>
                    <h3>Entumecimiento, hormigueo, dolor, picor, sensaci??n de quemaz??n, dolor facial y alteraciones visuales, alteraciones del habla, debilidad, temblor, dificultad para caminar, falta de coordinaci??n, estre??imiento, cambios de humor, depresi??n, capacidad de pensar, memoria, fatiga, sensibles a los cambios de temperatura.</h3>
                    <h2>Tratamiento</h2>
                    <h3>La EM no puede curarse, el tratamiento consisten en enlentecer la progresi??n de la enfermedad, mejorar los s??ntomas y minimizar los efectos de las crisis o ataques agudos.</h3>
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
                    <h3>El lupus es un trastorno autoinmune inflamatorio cr??nico. El lupus aparece porque el sistema inmune, que normalmente protege al organismo frente a infecciones, produce una respuesta inmune inadecuada dirigida contra los propios tejidos del individuo. </h3>
                    <h2>Sintomas<h2>
                    <h3>Los signos y s??ntomas del lupus son muy variables, y entre ellos se incluyen: dolor muscular, dolor de tipo artr??tico en una o varias articulaciones, erupci??n caracter??stica en forma de mariposa en la nariz y mejillas, fiebre, fatiga persistente, hipersensibilidad a la luz ultravioleta, fen??meno de Raynaud, p??rdida de cabello, dolor tor??cico, anemia, ??lceras en la boca, inflamaci??n y lesi??n de ??rganos y tejidos, como ri??ones, pulmones, coraz??n, capas de revestimiento del coraz??n, sistema nervioso central y vasos sangu??neos.</h3>
                    <h2>Tratamiento</h2>
                    <h3>El lupus es una enfermedad incurable, aunque en muchos individuos los s??ntomas pueden remitir entre las exacerbaciones. Los objetivos del tratamiento consisten en aliviar los s??ntomas, minimizar las exacerbaciones y las complicaciones, y tratar las complicaciones asociadas a la enfermedad en caso de que se produzcan.Se recomienda a las personas afectadas descansar suficientemente, practicar ejercicio f??sico, evitar el estr??s y la exposici??n a la luz solar. Se pueden administrar f??rmacos para aliviar el dolor, reducir la inflamaci??n y abordar correctamente posibles complicaciones.</h3>
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
                    <h3>Enfermedad autoinmune de car??cter neuromuscular y cr??nica que se caracteriza por presentar debilidad de los m??sculos esquel??ticos (voluntarios) del cuerpo en diferentes grados. La debilidad muscular aumenta durante los per??odos de actividad y disminuye despu??s de per??odos de descanso.</h3>
                    <h2>Sintomas<h2>
                    <h3>El cuadro cl??nico se caracteriza por debilidad y fatigabilidad muscular variable, siempre en relaci??n con la realizaci??n de actividad f??sica, sus primeros s??ntomas son la ca??da de los p??rpados y la visi??n doble o diplop??a, la debilidad de los m??sculos bulbares puede producir dificultad para hablar, para la masticaci??n y la degluci??n.</h3>
                    <h2>Tratamiento</h2>
                    <h3>Los anticolinester??sicos son el grupo de f??rmacos de primera elecci??n y su acci??n consiste en bloquear la degradaci??n de la acetilcolina por medio de la enzima colinesterasa. Este tipo de f??rmacos ayuda a que exista m??s acetilcolina disponible para que el m??sculo trabaje mejor.</h3>
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
                    <h3>La espondilitis anquilosante (EA) es una forma de artritis que afecta a la columna y constituye una condici??n cr??nica. Ocasiona una inflamaci??n dolorosa de las articulaciones de la columna vertebral y de las que existen entre la parte inferior de la columna vertebral y la pelvis.</h3>
                    <h2>Sintomas<h2>
                    <h3>Dolor, rigidez en tendones y ligamentos, dolor en las zonas con cart??lago, fiebre, cansancio, p??rdida de apetito, inflamaci??n y dolor en (tambi??n pierden capacidad de movimiento), hombros, rodillas, tobillos, dedos de pies y manos</h3>
                    <h2>Tratamiento</h2>
                    <h3>A pesar de que la espondilitis anquilosante o anquilopoy??tica (EA) no se puede curar, el ejercicio y la actividad f??sica ayudan a prevenir la rigidez articular. Se prescriben f??rmacos para aliviar el dolor y la inflamaci??n</h3>
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
                    <h3>La artritis reumatoidea (AR) es una enfermedad que lleva a la inflamaci??n de las articulaciones y tejidos circundantes. Es una enfermedad prolongada. Tambi??n puede afectar otros ??rganos.</h3>
                    <h2>Sintomas<h2>
                    <h3>Suele afectar a varias articulaciones y de manera sim??trica, con m??s frecuencia manos y mu??ecas, pero tambi??n codos, cuello, hombros, caderas, rodillas y pies, fatiga, fiebre, desarrollo de n??dulos subcut??neos especialmente en los codos y malestar general, anemia, complicaciones sist??micas y otros s??ntomas o signos asociados a otros trastornos autoinmunes."</h3>
                    <h2>Tratamiento</h2>
                    <h3>Actualmente no puede curarse, los objetivos del tratamiento se centran en disminuir la progresi??n de la enfermedad, en aliviar el dolor y disminuir la inflamaci??n, en mantener el funcionalismo de las articulaciones afectadas y minimizar las lesiones y complicaciones articulares. El tratamiento var??a de persona a persona y a menudo a lo largo del tiempo para un mismo individuo.</h3>
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
                    <h3>Los signos y s??ntomas asociados suelen ser inespec??ficos, pueden aparecer de manera insidiosa y lentamente, manifest??ndose ante situaciones de estr??s, los s??ntomas se incluyen: dolor abdominal, disminuci??n del vello corporal, deshidrataci??n en la enfermedad de Addison, diarrea o estre??imiento, mareos y desmayos, fatiga o debilidad extrema, hiperpigmentaci??n, manchas oscuras en la piel, dolores musculares y articulares, alteraciones de la presi??n sangu??nea y del ritmo card??aco, hipoglucemia, debilidad muscular, deseo imperioso de consumo de sal, v??mitos, p??rdida de peso.</h3>
                    <h2>Tratamiento</h2>
                    <h3>El tratamiento de la insuficiencia adrenal supone la administraci??n de hormonas de sustituci??n. El tipo de tratamiento depende de si falta cortisol, aldosterona o ambos. A veces se puede recuperar en parte la funci??n adrenal cuando la causa de la afectaci??n es una infecci??n, al resolverse esta ??ltima adecuadamente.</h3>
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
                    <h3>"La tiroiditis de Hashimoto es una enfermedad autoinmune, constituye la forma m??s com??n de inflamaci??n de la gl??ndula tiroides (tiroiditis) y la causa m??s frecuente de hipotiroidismo. La tiroides es una gl??ndula peque??a en forma de mariposa, localizada en la base de la garganta, justo por debajo de la nuez. Esta gl??ndula tiene un papel muy importante en el control del metabolismo del organismo mediante la producci??n de hormonas tiroideas.</h3>
                    <h2>Sintomas<h2>
                    <h3>Entre los signos y s??ntomas se incluyen: estre??imiento. depresi??n. sequedad de la piel. cansancio, fatiga, p??rdida de memoria, intolerancia al fr??o, en las mujeres, menstruaciones m??s frecuentes o irregulares, dolor en m??sculo y articulaciones, debilidad muscular, lentitud, cabello fino, p??rdida de cabello, aumento de peso, en las embarazadas riesgo de aborto.</h3>
                    <h2>Tratamiento</h2>
                    <h3>No se puede curar, pero la enfermedad puede ser controlada, cuando disminuye la producci??n de hormonas tiroideas y los s??ntomas van empeorando, est?? indicado el tratamiento hormonal sustitutivo con hormonas tiroideas. Se puede utilizar levotiroxina, que es una T4 sint??tica y que se toma en forma de p??ldoras. La medicaci??n reemplaza la hormona que tu tiroides no puede sintetizar, y probablemente deber??s tomarla durante toda la vida.</h3>
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
                    <h3>El S??ndrome de Sj??gren es una enfermedad autoinmune en la que el sistema inmunitario del organismo reacciona err??neamente contra los tejidos glandulares propios, tales como las gl??ndulas salivales y lacrimales.</h3>
                    <h2>Sintomas<h2>
                    <h3>Entre los signos y s??ntomas se incluyen: estre??imiento. depresi??n. sequedad de la piel. cansancio, fatiga, p??rdida de memoria, intolerancia al fr??o, en las mujeres, menstruaciones m??s frecuentes o irregulares, dolor en m??sculo y articulaciones, debilidad muscular, lentitud, cabello fino, p??rdida de cabello, aumento de peso, en las embarazadas riesgo de aborto.</h3>
                    <h2>Tratamiento</h2>
                    <h3>La enfermedad no tiene curaci??n. El tratamiento var??a en funci??n de la gravedad de los s??ntomas, y consiste en aliviar dichos s??ntomas y prevenir o minimizar las lesiones en los tejidos, como por ejemplo en la superficie ocular.</h3>
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
                    <h3>La enfermedad cel??aca tiene una base autoinmune y se caracteriza por una respuesta inmune inapropiada al gluten -prote??na presente en el trigo- y a otras prote??nas de la dieta halladas en alimentos como la cebada y el centeno. Esta respuesta conduce a una inflamaci??n del intestino delgado y a una lesi??n y destrucci??n de las vellosidades que recubren la pared intestinal.</h3>
                    <h2>Sintomas<h2>
                    <h3>Entre los signos y s??ntomas de enfermedad cel??aca se incluyen: dolor y distensi??n abdominal, diarrea cr??nica, heces grasientas y malolientes, v??mitos, anemia por d??ficit de hierro que no responde a tratamiento con suplementos f??rricos, tendencia a sangrar, dolores articulares y ??seos, fatiga, debilidad, dificultad para concentrarse, ??lceras bucales, p??rdida de peso, alteraciones del esmalte dental, osteoporosis.</h3>
                    <h2>Tratamiento</h2>
                    <h3>Los individuos con enfermedad cel??aca deben seguir una dieta libre de gluten, normalmente durante toda la vida. Suele ser necesario consultar con un dietista y ser muy cuidadoso con la composici??n de todos los alimentos que se ingieren para garantizar una recuperaci??n completa. Cuando se suprimen todas las posibles fuentes de trigo, cebada y centeno, los niveles de autoanticuerpos empiezan a disminuir y la lesi??n intestinal se resuelve.</h3>
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

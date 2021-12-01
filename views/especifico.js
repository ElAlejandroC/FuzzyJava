function especifico(){
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


    const array2 = []
    const arregloP = array2.concat(diabetes,esclerosis,lupus,miastenia,espondielitis,artritis,addison,tiroiditis,sjorgen,celiaca)
    console.log(arregloP)
}
    
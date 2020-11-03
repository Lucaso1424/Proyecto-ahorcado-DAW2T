function comitasBajas(){
    let mostrar = [];
    texto = texto.split("")
    
    for(let letra of texto){
        mostrar.push('_');
    }

    document.write("<h1>"+mostrar+"</h1>");
}

comitasBajas();
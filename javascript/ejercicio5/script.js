//archivo de javascript. 
//code here...
function peticion (){

    var peticion = 1;
    var resultado = 0 ;
    do{
        var numero = prompt(' INTRODUCE NUMERO:');
        numero = parseInt(numero);
        if (numero>resultado) resultado=numero;
    }while(numero!=0);
    document.write('el mayor numero introducido es: '+resultado);
}
peticion();
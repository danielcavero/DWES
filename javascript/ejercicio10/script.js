//archivo de javascript. 
//code here...


var numero=0;

do {
    numero = prompt('introduzca un numero entre 1 y 5 ');
    if (numero >0 && numero <=5){
        document.write(numero+' es un numero correcto '+ '<br />');        
    } else if (numero==0){
        document.write('FIN APLICACION')
        
    }else {
        alert('numero '+numero+' no es correcto');
    }
    
} while (numero!=0);    
//archivo de javascript. 
//code here...
var numero;
var par=0, impar =0;
var notNumber=0;

do {
    numero = prompt('ingresar un numero: ');
    if(isNaN(numero)){
        notNumber++;
    }else if (numero==0) {
                alert('FIN DE LA APLICACION')
    }else if(numero%2==0) {
        par++;
    }else {
        impar++;
    }

} while (numero!=0);

document.write('resultado: -------------------- <br/>');
document.write('Pares: '+ par+ '<br/>');
document.write('Impares: '+ impar+ '<br/>');
document.write('No es numero: '+ notNumber+ '<br/>');
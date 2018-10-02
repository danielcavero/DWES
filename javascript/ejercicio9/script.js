//archivo de javascript. 
//code here...
var nota1, nota2, nota3, resultado;
var nombre = prompt('nombre del alumno: ');

nota1 = parseInt(prompt('nota1: '));
nota2 = parseInt(prompt('nota2: '));
nota3 = parseInt(prompt('nota3: '));

resultado = (nota1+nota2+nota3)/3;
if (resultado>=7){
    document.write('Promociona');    
}else {
    document.write('NO PROMOCIONA');
}

//archivo de javascript. 
//code here...

var cantidad = prompt ('cantidad: ');
cantidad = parseInt(cantidad);
var b500 = 0;var b200 = 0;var b100=0; var b50=0; var b20 =0; var b10 =0; var b5=0; var m2 =0; 

while (cantidad>=500) {
    b500++;
    cantidad -= 500;
}
while (cantidad>=200) {
    b200++;
    cantidad -= 200;    
}
while (cantidad>=100) {
    b100++;
    cantidad -= 100;    
}
while (cantidad>=50) {
    b50++;
    cantidad -= 50;    
}
while (cantidad>=20) {
    b20++;
    cantidad -= 20;    
}
while (cantidad>=10) {
    b10++;
    cantidad -= 10;    
}
while (cantidad>=5) {
    b5++;
    cantidad -= 5;    
}
while (cantidad>=2) {
    m2++;
    cantidad -= 2;    
}
document.write( " -- cantidad billetes 500: "+ b500+'<br/>');
document.write( " -- cantidad billetes 200: "+ b200+'<br/>');
document.write( " -- cantidad billetes 100: "+ b100+'<br/>');
document.write( " -- cantidad billetes 50: "+ b50+'<br/>');
document.write( " -- cantidad billetes 20: "+ b20+'<br/>');
document.write( " -- cantidad billetes 10: "+ b10+'<br/>');
document.write( " -- cantidad billetes 5: "+ b5+'<br/>');
document.write( " -- cantidad monedas 2: "+ m2+'<br/>');
document.write( " -- cantidad monedas 1: "+ cantidad+'<br/>');

     

   



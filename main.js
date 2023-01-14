/*
    Usando el do while realizar un bucle que cuando nos pida agregar la letra a, y mientras se siga cumpliendo 
    imprima una y otra vez hasta que coloquemos que se coloque una letra distinta con lo que finalizara el bucle
*/ 

var opc="a"
var letra

alert("Ingrese una letra diferente de A: ")
letra=prompt("Ingrese una letra diferente de A: ")

do {
    letra=prompt("Ingrese una letra diferente de A: ")
} while(letra==opc)

alert("La letra ingresada es diferente de A: ",letra)
document.write("La letra ingresada es diferente de A: ",letra)

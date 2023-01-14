/*
    Usando el do while realizar un bucle que cuando nos pida agregar la letra a, y mientras se siga cumpliendo 
    imprima una y otra vez hasta que coloquemos que se coloque una letra distinta con lo que finalizara el bucle
*/ 

let letra="a",opc

alert("Bucle de la letra A")
opc=prompt("Ingrese una letra diferente de A: ")

while (opc==letra) {
    opc=prompt("Ingrese una letra diferente de A: ")
}

alert("La letra ingresada es diferente de A: ", opc)
document.write("La letra ingresada es diferente de A: ", opc)
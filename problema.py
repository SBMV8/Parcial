"""
    Usando el do while realizar un bucle que cuando nos pida agregar la letra a, y mientras se siga cumpliendo 
    imprima una y otra vez hasta que coloquemos que se coloque una letra distinta con lo que finalizara el bucle
"""

opc = str("a")

print("Ingrese una letra diferente de A")
letra = str(input())

while (letra == opc):
    print("Ingrese una letra diferente de A")
    letra = str(input())

print("La letra ingresada es diferente de A: ",letra)

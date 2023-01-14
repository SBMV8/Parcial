"""
    Usando el do while realizar un bucle que cuando nos pida agregar la letra a, y mientras se siga cumpliendo 
    imprima una y otra vez hasta que coloquemos que se coloque una letra distinta con lo que finalizara el bucle
"""

def main():
    letra = str("a")
    opc = str(input("Ingrese una letra diferente de A: "))
    while (letra == opc):
       opc = str(input("ingrese una letra diferente de A: "))
    print("La letra ingresada es diferente de A: ",opc)

main()

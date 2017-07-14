# lista-frutas
## Ejercicio evaluado
>Crear una lista ordenada de frutas y para agregar mas frutas a tu catalogo crea un input y un boton que nos facilitara añadir cualquier fruta que deseemos a la lista.
***
1. Si una fruta que se ingresa ya se ingreso anteriormente aparece un mensaje y no se agrega al arreglo de frutas
```javascript
    if(fruta == frutas[i])
{
    frutaExiste = true;            
    alert("Fruta ya existente");
    document.getElementById("texto").value = "";
    break;
}
```
2. Cuando una fruta ingresada es aceptada recien se agrega al arreglo de frutas y ese se ordena con sort
```javascript
if(!frutaExiste)
{
    frutas.push(fruta);
    document.getElementById("texto").value = "";
    frutas.sort();
    imprimir();
}
```
3. Se creo una funcion para imprimir las frutas. Primero se captura el div del html a traves de su ID para ahi colocar todas las frutas que se encuentran en el arreglo de frutas
```javascript
var registro = document.getElementById("listaFrutas");
function imprimir()
{
    var lista = "";
    for(var i = 0; i < frutas.length; i++)
    {
        lista += (i + 1) + ". " + frutas[i] + "<br>";
    }
    registro.innerHTML = lista + "<br>";
}
```
4. Pantalla final
![Alt-Text](assets/captura.png)
Se tiene una caja de texto y un boton Agregar para poder interactuar
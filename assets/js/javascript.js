var addFruta = document.getElementById("btnAgregar");
var registro = document.getElementById("listaFrutas");
var frutas = [];
addFruta.onclick = function(){
    var fruta = document.getElementById("texto");
    fruta = fruta.value.charAt(0).toUpperCase() + fruta.value.slice(1).toLowerCase();
    var frutaExiste = false;
    for(var i = 0; i < frutas.length; i++)
    {
        if(fruta == frutas[i])
        {
            frutaExiste = true;            
            alert("Fruta ya existente");
            document.getElementById("texto").value = "";
            break;
        }
    }
    if(!frutaExiste)
    {
        frutas.push(fruta);
        document.getElementById("texto").value = "";
        frutas.sort();
        imprimir();
    }
    console.log(frutas);
}

function imprimir()
{
    var lista = "";
    for(var i = 0; i < frutas.length; i++)
    {
        lista += (i + 1) + ". " + frutas[i] + "<br>";
    }
    registro.innerHTML = lista;
}
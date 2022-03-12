const lista1 = [
    400000000,
    100,
    500,
    200
]

const mitadLista1 = parseInt(lista1.length / 2);

function ordernaLista(listaDesordenada){
    const listaOrdenada = listaDesordenada.sort(function(a,b){
        return a - b
    });
    return listaOrdenada; 
}

function calcularMediaAritmetica(lista){
    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento){
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista =  sumaLista / lista.length;

    return promedioLista;
}

function esPar(numerito){
    if(numerito % 2 === 0){
        return true;
    }else{
        return false;
    }
}

let mediana;

const listaMayorMenor = ordernaLista(lista1);

if(esPar(listaMayorMenor.length)){
    //necesitamos dos elementos
    // el promedio
    // mediana
    const elemento1 = listaMayorMenor[mitadLista1 - 1];
    const elemento2 = listaMayorMenor[mitadLista1];

    const promedioelemento1y2 = calcularMediaAritmetica([elemento1,elemento2]);

    mediana = promedioelemento1y2;

}else{
    //posicion mitadLista1 dentro lista1
    mediana = listaMayorMenor[mitadLista1];

}
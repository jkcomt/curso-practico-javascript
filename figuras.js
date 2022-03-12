//código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado: "+ ladoCuadrado + " cm");

function perimetroCuadrado(lado){
  return lado * 4;  
} 
// console.log("El perímetro del cuadrado: "+ perimetroCuadrado);

function areaCuadrado(lado){
    return lado * lado;
}
    
// console.log("El área del cuadrado: "+ areaCuadrado + "cm2");
console.groupEnd();

//código del triángulo
console.group("Triángulo");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo3 = 4;

// console.log("Los lados del triángulo: "
// + ladoTriangulo1 
// + "cm, "
// + ladoTriangulo1
// + "cm, "
// + baseTriangulo3 
// + " cm");

// const alturaTriangulo = 5.5;
// console.log("La altura del triángulo: "+ alturaTriangulo+"cm");

function perimetroTriangulo(ladoTriangulo1,ladoTriangulo2,baseTriangulo){
    return ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
}
// console.log("El perimétro del triángulo: "+ perimetroTriangulo+"cm");

function areaTriangulo(baseTriangulo,alturaTriangulo){
    return (baseTriangulo * alturaTriangulo) / 2;
}
// console.log("El área del triángulo: "+ areaTriangulo+" cm^2");

console.groupEnd();

//código del círculo
console.group("Círculos");

//Radio
// const radioCirculo = 4;
// console.log("El radio del Círculo: "+ radioCirculo +"cm");
//Diámetro
function diametro(radioCirculo){ 
    return radioCirculo * 2;
}
// console.log("El diámetro del Círculo: "+ diametro+"cm");
//Pi
const pi = Math.PI;
// console.log("El valor de PI es: "+ pi);
//Circunferencia
function perimetroCirculo(radioCirculo){ 
    const diametro = this.diametro(radioCirculo);
    return diametro * pi;
};
// console.log("El perímetro del Círculo: "+ perimetroCirculo+"cm");
//Área
function areaCirculo(radioCirculo){ 
    return (radioCirculo * radioCirculo) * pi;
};
// console.log("El área del Círculo: "+ areaCirculo+"cm^2");


console.groupEnd();


function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    alert(area);
}

function alturaTrianguloIsoceles(){
    const inputBase = document.getElementById("InputTrianguloBase");
    const inputLado = document.getElementById("InputTrianguloLado");
    const valueBase = inputBase.value;
    const valueLado = inputLado.value;

    const ladoCuadrado = (valueBase * valueBase);
    const baseCuadrado = (valueBase * valueBase);

    const resultado = Math.sqrt(ladoCuadrado - (baseCuadrado / 4));

    alert(resultado);
}

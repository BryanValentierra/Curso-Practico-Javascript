// Código del cuadrado
console.group("Cuadrado");
// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " +   ladoCuadrado   +   "cm");

function perimetroCuadrado(lado) {
return lado * 4;
}
// console.log("El perimetro del cuadrado es: "    +   perimetroCuadrado   +   "cm");

function areaCuadrado(lado) {
    return lado * lado;
}

// console.log("El area del cuadrado es: " +   areaCuadrado    +   "cm^2");

console.groupEnd();

// Código del triangulo

console.group("Triangulo")

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;
// console.log(
// "Los lados del triangulo miden: "
// +   ladoTriangulo1
// +   "cm,"
// +  ladoTriangulo2
// +   "cm,"
// +   baseTriangulo
// +   "cm"
// );

// const alturaTriangulo = 5.5;
// console.log("La altura del triangulo mide: "    +   alturaTriangulo +   "cm")

function perimetroTriangulo(lado1, lado2, lado3) {
    return lado1    +   lado2   +   lado3;
}
// console.log("El perimetro del triangulo mide: " +   perimetroTriangulo()   +   "cm");

function areaTriangulo(base, altura) {
return (base    *   altura)/2;
}
// console.log("El area del triangulo mide: "  +   areaTriangulo   +   "cm^2");

console.groupEnd();

// Código del circulo

console.group("Circulo");

// Radio

// const radioCirculo = 4;
// console.log("El radio del circulomide: "    +   radioCirculo    +   "cm");

// Diametro

function diametroCirculo(radio) {
    return radio    *   2;
}

// const diametroCirculo = radioCirculo    *   2;
// console.log("El diametro del circulo mide: "    +   diametroCirculo +   "cm");

// PI

const PI = Math.PI;
console.log("PI es: "   +   PI)

// Circunferencia

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro *   PI;
}

// const perimetroCirculo = diametroCirculo    *   PI;
// console.log("El perimetro de el circulo mide: " +   perimetroCirculo    +   "cm");

// Area

function areaCirculo(radio) {
    return (radio   *   radio)  *   PI;
}

// const areaCirculo = (radioCirculo   *   radioCirculo)   *   PI;
// console.log("El area del circulo mide: "    +   areaCirculo +   "cm^2");

console.groupEnd();

// Aqui interactuamos con el HTML

function calcularPerimetroCuadrado() {
const input = document.getElementById("InputCuadrado");
const value = input.value;

const perimetro = perimetroCuadrado(value);
alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);

}

function calcularPerimetroTriangulo() {

    const inputLado1 = document.getElementById("InputTrianguloLado1");
    const inputLado2 = document.getElementById("InputTrianguloLado2");
    const inputBase = document.getElementById("InputTrianguloBase");

    const value1 = inputLado1.value;
    const value2 = inputLado2.value;
    const value3 = inputBase.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);
    alert(perimetro);

}

    function calcularAreaTriangulo() {

        const input = document.getElementById("InputTrianguloBase");
        const inputAltura =document.getElementById("InputTrianguloAltura");
        const value = input.value;
        const value1 =inputAltura.value;

        const area = areaTriangulo(value, value1);
        alert(area);

    }

    function calcularPerimetroCirculo() {
        const input = document.getElementById("InputCirculo");
        const value = input.value;

        const perimetro = perimetroCirculo(value);
        alert(perimetro);

        }

        function calcularAreaCirculo() {
            const input = document.getElementById("InputCirculo");
            const value = input.value;

            const area = areaCirculo(value);
            alert(area);

        }
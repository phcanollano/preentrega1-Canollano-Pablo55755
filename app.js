function saludar() {
    let iniciar = "";

    while (iniciar.toLowerCase() !== "ok") {
        iniciar = prompt("Por favor, ingrese 'ok' para comenzar:").toLowerCase();
    }
}

saludar();

function calcularGastos() {
    let opcion = 0;

    while (opcion !== 1 && opcion !== 2) {
        opcion = parseInt(prompt("Elija una opción:\n1-gastos en pesos\n2-gastos en dolares"));
    }

    if (opcion === 1) {
        calcularPesos();
    } else if (opcion === 2) {
        calcularDolares();
    }
}

function calcularPesos() {
    let opcion2 = 0;

    while (opcion2 !== 1 && opcion2 !== 2) {
        opcion2 = parseInt(prompt("Eligió Gastos en pesos Las opciones son:\n1-Gastos impuestos\n2-Gastos tarjeta de credito"));
    }

    if (opcion2 === 1) {
        alert("Gastos impuestos");
    } else if (opcion2 === 2) {
        alert("Gastos Tarjeta de credito");
    }
}

function calcularDolares() {
    let opcion1 = prompt("Eligió gastos en dolares. ¿Le gustaría calcular gastos? (si/no)").toLowerCase();

    if (opcion1 === "si") {
        alert("Eligió sí, ingrese sus gastos");
    } else if (opcion1 === "no") {
        alert("volver a ingresar");
    }
}

let nombreCliente = prompt("Por favor, escriba su nombre");
alert("Bienvenido/a " + nombreCliente);


calcularGastos();

let valor;
let total= 0;
let continuar= "si";

while (continuar == "si"){
    valor = +prompt ("ingrese costo:");
    valor = +prompt ("ingrese costo:");
    total = total + valor;
    continuar = prompt ("Desea seguir sumando? si/no");
}  

alert ('el total de gastos es de $' + total);



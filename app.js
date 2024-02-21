

var nombre = prompt("Ingrese su nombre");

var numeroCliente = 0;

do {
    numeroCliente = parseInt(prompt("Ingrese su número de cliente de 7 dígitos)"));
   } while (String(numeroCliente).length !== 7 || !Number(numeroCliente));
   

var zona = parseInt(prompt("Ingrese zona: (1-CABA, 2-Conurbano, 3-Interior de la provincia)"));

var consumoKw = parseInt(prompt("Ingrese consumo en Kw"));
var importeKw;

// evaluar kw por zona (importe)

if (zona == "1") {
    importeKw = 180;
} else if (zona == "2") {
    importeKw = 135;
} else if (zona == "3") {
    importeKw = 90;
}


var totalKw = consumoKw * importeKw;



const gastosGenerales = () =>{
 return (totalKw * 0.05);
}

const impuestosProvinciales = () =>{
    return (totalKw * 0.03).toFixed(2);
}

const gastosFijos = () => {
    
    return 1225;
}

const gastosVariables = () =>{
    return (totalKw * 0.02);
}

var totalPagar = (totalKw + gastosGenerales() + parseFloat(impuestosProvinciales()) + gastosFijos() + gastosVariables()).toFixed(2);

document.write(
   
 `
  <div class="container">
  <div class="center">
   Nombre: ${nombre}
   <br>
    Número Cliente: ${numeroCliente}
    <br>
    Zona: ${zona}
    <br>
    Consumo Kw: ${consumoKw}
    <br>
    Importe por Kw: ${importeKw}
    <br>
    Importe total de Kw consumido: ${totalKw} 
    <br>
    Importe de gastos generales: ${gastosGenerales()} 
    <br>
    Importe de impuestos provinciales: ${impuestosProvinciales()}
    <br>
    Importe de gastos fijos: ${gastosFijos()}
    <br>
    Importe de gastos variables: ${gastosVariables()}
    <br>
    Importe total a pagar: ${totalPagar}
    </div>
    </div>

    `
    
)

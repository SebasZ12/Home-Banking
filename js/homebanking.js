//Declaración de variables
var nombreUsuario = "Sebas Zumbay";
var saldoCuenta = 1000000;
var limiteExtraccion = 1000;
var agua = 350;
var telefono = 425;
var luz = 210;
var internet = 570;
var cuentaAmiga1 = "1234567";
var cuentaAmiga2 = "7654321";
var codigoCuenta = "2017";
var ingreso = true;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML

iniciarSesion();
cargarNombreEnPantalla();
actualizarSaldoEnPantalla();
actualizarLimiteEnPantalla();

//Funciones que tenes que completar
function sumarSaldo(monto){
    saldoCuenta = saldoCuenta + monto;
}

function restarSaldo(monto) {
    saldoCuenta = saldoCuenta - monto;
}

function billetes100 (monto) {
    if(monto%100 != 0){
      return true;
    } else {

      return false;
    }
}

function verificarCuenta( cuenta , saldoARestar){
  if (cuenta === cuentaAmiga1 || cuenta === cuentaAmiga2 ){
    restarSaldo(saldoARestar);
    actualizarSaldoEnPantalla();
    alert("Se han transferido: $" + saldoARestar +
          "\nCuenta destino: " + cuenta);
  } else {
    alert("Solo puedes enviar dinero a una cuenta amiga.");
  }
}

function promptNum(mensaje){
  var parseo = parseInt(prompt(mensaje));
  if(isNaN(parseo) || parseo <= 0){
    alert("Ingrese un valor numerico.");
    return false;
  }
  return parseo;
}

function cambiarLimiteDeExtraccion() {

  if(ingreso === false){
    return alert("Inicie sesion correctamente");
  }

  var nuevoLim = promptNum("Ingrese un nuevo limite de extraccion.");

  if(nuevoLim === false){
    return nuevoLim = limiteExtraccion;
  }else if (nuevoLim > saldoCuenta){
    return alert("El limite tiene que ser menor al saldo.")
  }

  limiteExtraccion = nuevoLim;
  actualizarLimiteEnPantalla();
  alert("Tu nuevo limite es: $" + limiteExtraccion );
}

function extraerDinero() {

  if(ingreso === false){
    return alert("Inicie sesion correctamente");
  }

  var montoAExtraer = promptNum("Ingrese el monto a extraer.");

  if (montoAExtraer > saldoCuenta) {
    return alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero.");
  } else if (montoAExtraer > limiteExtraccion) {
    return alert("La cantidad de dinero que deseas extraer es mayor a tu limite de extracción");
  } else if (billetes100(montoAExtraer)){
    return alert("Solo puedes extraer billetes de 100.");
  }else if(montoAExtraer === false){
    montoAExtraer = 0;
  }

  saldoAntes = saldoCuenta;
  restarSaldo(montoAExtraer);
  actualizarSaldoEnPantalla();
  alert("Has extraido: $" + montoAExtraer +
        "\nSaldo anterior: $" + saldoAntes +
        "\nSaldo actual: $" + saldoCuenta);
}

function depositarDinero() {
  if(ingreso === false){
    return alert("Inicie sesion correctamente");
  }
  var montoADepositar = promptNum("Ingrese el monto a depositar.");

  if(montoADepositar == false){
    montoADepositar = 0;
  }else if (billetes100(montoADepositar)){
    return alert("Solo puedes depositar billetes de 100.");
  }

  montoAntes = saldoCuenta;
  sumarSaldo(montoADepositar);
  actualizarSaldoEnPantalla();
  alert("Has depositado: $" + montoADepositar +
        "\nSaldo anterior: $" + montoAntes +
        "\nSaldo actual: $" + saldoCuenta );
}

function pagarServicio() {
  //Ingresamos un mensaje a mostrar
  var elecc = promptNum("Ingrese el número que corresponda con el servicio que quieres pagar"
                    + "\n1 - Agua"
                    + "\n2 - Luz"
                    + "\n3 - Internet"
                    + "\n4 - Telefono" );

  switch (elecc) {
    case 1:
      if(saldoCuenta >= agua){
        saldoAnterior = saldoCuenta;
        restarSaldo(agua);
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio Agua." +
              "\nSaldo anterior: $" + saldoAnterior +
              "\nDinero descontado: $" + agua +
              "\nSaldo actual: $" + saldoCuenta );
      }else{
        alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
      }
      break;
    case 2:
      if(saldoCuenta >= luz){
        saldoAnterior = saldoCuenta;
        restarSaldo(luz);
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio Luz." +
              "\nSaldo anterior: $" + saldoAnterior +
              "\nDinero descontado: $" + luz +
              "\nSaldo actual: $" + saldoCuenta);
      }else{
        alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
      }
      break;
    case 3:
      if(saldoCuenta >= internet){
        saldoAnterior = saldoCuenta;
        restarSaldo(internet);
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio Internet." +
              "\nSaldo anterior: $" + saldoAnterior +
              "\nDinero descontado: $" + internet +
              "\nSaldo actual: $" + saldoCuenta);
      }else{
        alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
      }
      break;
    case 4:
      if(saldoCuenta >= telefono){
        saldoAnterior = saldoCuenta;
        restarSaldo(telefono);
        actualizarSaldoEnPantalla();
        alert("Has pagado el servicio Telefono." +
              "\nSaldo anterior: $" + saldoAnterior +
              "\nDinero descontado: $" + telefono +
              "\nSaldo actual: $" + saldoCuenta);
      }else{
        alert("No hay suficiente saldo en tu cuenta para pagar este servicio");
      }
      break;
    default:
      alert("Seleccione una de las opciones que aparecen en pantalla");

  }
}

function transferirDinero() {

  var montoATransferir = promptNum("Ingrese el monto a transferir.");

  if(montoATransferir > saldoCuenta){
    return alert("No hay saldo suficiente para completar la transacción");
  }else if(montoATransferir <= saldoCuenta && montoATransferir != false){
    var numeroCuenta = prompt("Ingrese el numero de la cuenta a la que desea transferir el dinero.");
    verificarCuenta(numeroCuenta, montoATransferir);
  }
}

function iniciarSesion() {

  var codigo = prompt("Ingrese el codigo de cuenta.");

  if(codigo != null && codigo ===  codigoCuenta){
    alert("Bienvenido/a " + nombreUsuario +" ya puedes comenzar a realizar operaciones.");
    ingreso = true;
    saldoCuenta = 1000000;
    actualizarSaldoEnPantalla();
  }else{
    saldoCuenta = 0;
    actualizarSaldoEnPantalla();
    ingreso = false;
    alert("Codigo incorrecto. Tu dinero ha sido retenido por cuestiones de seguridad.");
  }
}

//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}

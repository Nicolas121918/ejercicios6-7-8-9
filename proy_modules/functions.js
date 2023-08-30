const colors = require('colors');

function recomendarBebida(menu) {
    switch (menu.toLowerCase()) {
        case 'carne':
            return 'Vino tinto';
        case 'pescado':
            return 'Vino blanco';
        case 'verdura':
            return 'Agua';
        default:
            return 'Agua';
    }
}

function determinarJuegosAcceso(pago) {
    if (pago >= 4000) {
        return ['Consolas', 'Juegos 2D', 'Juegos 3D', 'Realidad Virtual'];
    } else if (pago >= 3000) {
        return ['Consolas', 'Juegos 2D', 'Juegos 3D'];
    } else if (pago >= 2000) {
        return ['Consolas', 'Juegos 2D'];
    } else if (pago >= 1000) {
        return ['Consolas'];
    } else {
        return 'Debe ingresar más dinero para acceder a los juegos.';
    }
}

function contarNumero(numero) {
  if (numero <= 0) {
    console.log("Por favor, ingresa un número positivo mayor que cero.");
    return;
  }

  console.log("Enteros positivos hasta", numero);
  for (let i = 1; i <= numero; i++) {
    console.log(i);
  }
}

function mostrarNumerosPares(numero) {
  if (numero < 0) {
    console.log("El número debe ser positivo.");
    return;
  }

  console.log("Números pares incluidos en el numero ", numero);
  const numeroStr = numero.toString();

  for (let i = 0; i < numeroStr.length; i++) {
    const digito = parseInt(numeroStr[i]);
    if (digito % 2 === 0) {
      console.log(digito);
    }
  }
}

module.exports = {
    recomendarBebida,
    determinarJuegosAcceso,
    contarNumero,
    mostrarNumerosPares
};

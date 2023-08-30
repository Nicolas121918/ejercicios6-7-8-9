const colors = require('colors');
require('colors');

const { recomendarBebida, determinarJuegosAcceso, contarNumero, mostrarNumerosPares } = require('./proy_modules/functions.js');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const main = () => {
  console.clear();

  const tipoMenu = 'CARNE';
  const bebidaRecomendada = recomendarBebida(tipoMenu);

  console.log(colors.bgCyan.white('╔════════════════════════════════════════════════╗'));
  console.log(colors.bgCyan.white(`║ Recomendación de bebida acompañante para el menú ║`));
  console.log(colors.bgCyan.white('╟──────────────────────────────────────────────────╢'));
  console.log(colors.bgRed.white(`║ Tipo de menú: ${tipoMenu.padEnd(40)} ║`));
  console.log(colors.bgRed.white('╟──────────────────────────────────────────────────╢'));
  console.log(colors.bgCyan.white(`║ Bebida recomendada: ${bebidaRecomendada.padEnd(33)} ║`));
  console.log(colors.bgCyan.white('╚════════════════════════════════════════════════╝'));

  const pagoRealizado = 5000;
  const juegosAcceso = determinarJuegosAcceso(pagoRealizado);

  console.log(colors.bgYellow('╔════════════════════════════════════════════════╗'));
  console.log(colors.bgCyan('║ Acceso a los juegos según el pago realizado    ║'));
  console.log(colors.bgCyan('╟──────────────────────────────────────────────────╢'));
  console.log(colors.bgGreen(`║ Monto pagado: ${pagoRealizado.toString().padEnd(39)} ║`));
  console.log(colors.bgRed('╟──────────────────────────────────────────────────╢'));

  if (typeof juegosAcceso === 'string') {
    console.log(colors.bgYellow(juegosAcceso.padEnd(50)));
  } else {
    console.log(colors.bgYellow('║ Juegos a los que tiene acceso:                 ║'));
    console.log(colors.bgYellow('║ ────────────────────────────────────────────── ║'));
    for (const juego of juegosAcceso) {
      console.log(colors.white(`║ ${juego.padEnd(47)} ║`));
    }
  }

  rl.question(colors.white("║ Ingresa un número para contar enteros positivos: ".padEnd(48)), function(numero) {
    contarNumero(parseInt(numero));
    rl.question(colors.white("║ Ingresa un número para mostrar números pares: ".padEnd(47)), function(numero) {
      mostrarNumerosPares(parseInt(numero));
      rl.close();
    });
  });
};

main();

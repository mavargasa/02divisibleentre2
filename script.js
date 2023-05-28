// Crea un array vacío
var numerosAleatorios = [];

// Genera 10 números aleatorios y guardarlos en el array de acuerdo a ejercicio
for (var i = 0; i < 10; i++) {
  var numero = Math.floor(Math.random() * 100) + 1;
  console.log(numero);
  numerosAleatorios.push(numero);
}

// Mostrar el resultado en la consola
console.log("Números aleatorios:", numerosAleatorios);          
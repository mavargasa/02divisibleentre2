function verificarDivisibilidad() {
  var numero = parseInt(document.getElementById('numeroInput').value);
  var resultadoDiv = document.getElementById('resultadoDiv');
  if (numero % 2 === 0) {
    resultadoDiv.textContent = numero + ' es divisible entre 2.';
  } else {
    resultadoDiv.textContent = numero + ' no es divisible entre 2.';
  }
}
      
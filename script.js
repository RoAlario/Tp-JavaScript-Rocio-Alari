
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('dataForm');
    const result = document.getElementById('result');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Evita que el formulario se envíe de la manera tradicional
  
      const a = parseFloat(document.getElementById('inputA').value);
      const b = parseFloat(document.getElementById('inputB').value);
      const c = a + b;
  
      result.textContent = `El valor de a es: ${a}, el valor de b es: ${b}, y el valor de c es: ${c}`;
    });
  });
var ObjSlider = document.getElementById("InpSlider");
var ObjResultadoSlider = document.getElementById("ResulInp");
var ObjParrafo = document.getElementById("Resultado");

// Función para actualizar el valor en el span cuando se mueve el slider
ObjSlider.oninput = function () {
    ObjResultadoSlider.innerHTML = this.value;
    actualizarColor(this.value); // Llama a una función para cambiar el color dinámicamente
};

// Función para cambiar el color del texto del párrafo según el valor del slider
function actualizarColor(valor) {
    let rojo = Math.min(255, valor * 2); // Escala de rojo
    let verde = Math.min(255, 255 - valor * 2); // Escala de verde
    let azul = 255 - (Math.abs(50 - valor) * 5); // Escala de azul inversa al centro
    ObjParrafo.style.color = `rgb(${rojo}, ${verde}, ${azul})`;
}

// Función para mostrar datos adicionales al pulsar el botón
function MostrarDatos() {
    let valorSlider = ObjSlider.value;
    ObjParrafo.innerHTML = `El valor actual es: ${valorSlider}.`;
}

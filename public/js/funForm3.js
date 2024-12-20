        // Función para sumar
        function Sumar() {
            const num1 = parseFloat(document.getElementById("Num1").value) || 0;
            const num2 = parseFloat(document.getElementById("Num2").value) || 0;
            document.getElementById("ResultadoSumaResta").innerHTML = `Resultado: ${num1 + num2}`;
        }

        // Función para restar
        function Restar() {
            const num1 = parseFloat(document.getElementById("Num1").value) || 0;
            const num2 = parseFloat(document.getElementById("Num2").value) || 0;
            document.getElementById("ResultadoSumaResta").innerHTML = `Resultado: ${num1 - num2}`;
        }
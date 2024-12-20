<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formularios 3</title>
    <link rel="stylesheet" href="public/css/stylesForm1.css">
    <link rel="stylesheet" href="public/css/stylesForm2.css">
    <link rel="stylesheet" href="public/css/stylesForm3.css">
</head>

<body>
    <div class="container">
        <!-- Formulario 1: Adivinar el Número -->
        <div class="card">
            <h1>Juega a adivinar el número</h1>
            <input id="InpNumero" type="number" placeholder="Ingresa número">
            <button onclick="FuncionAdivinar()">Adivinar</button>
            <button onclick="FuncionReiniciar()">Reiniciar</button>
            <div id="DivResultado"></div>
        </div>

        <!-- Formulario 2: Slider -->
        <div class="card">
            <h3>Slidervar</h3>
            <div>
                <input id="InpSlider" type="range" min="0" max="100" value="50">
                <span id="ResulInp">50</span>
            </div>
            <button onclick="MostrarDatos()">Comprobar</button>
            <p id="Resultado"></p>
        </div>

        <!-- Formulario 3: Suma y Resta -->
        <div class="card">
            <h3>Suma y Resta</h3>
            <div>
                <input id="Num1" type="number" placeholder="Número 1">
                <input id="Num2" type="number" placeholder="Número 2">
            </div>
            <button onclick="Sumar()">Sumar</button>
            <button onclick="Restar()">Restar</button>
            <p id="ResultadoSumaResta">Resultado: </p>
        </div>
    </div>
</body>
    <script src="public/Js/funForm1.js"></script>
    <script src="public/Js/funForm2.js"></script>
    <script src="public/js/funForm3.js" ></script>
</html>

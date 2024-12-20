function FuncionRedireccionamientoLogin(event) {
    event.preventDefault(); // Esto es momentaneo
    var usuario = document.getElementById("InpUser").value;
    var pass = document.getElementById("InpPassword").value;
  
    if (usuario == "admin") {
      switch (pass) {
        case "1":
          window.location.href = "http://localhost/CDTAREA/Formulario1";
          break;
        case "2":
          window.location.href = "http://localhost/CDTAREA/Formulario2";
          break;
        case "3":
          window.location.href = "http://localhost/CDTAREA/Formulario3";
          break;
        default:
          alert("Ingreso erroneo");
          break;
      }
    }
  
  };
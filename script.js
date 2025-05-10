function mostrarMensaje(distancia) {
  const mensajeText = document.getElementById("mensajeText");
  const mensajeImg = document.getElementById("mensajeImg");
  const llegadaVentana = document.getElementById("llegadaVentana");
  const titulo = document.getElementById("titulo");
  const gpsButtons = document.getElementById("gps-buttons");

  // Ocultar la ventana de llegada y los botones iniciales
  llegadaVentana.style.display = "none";
  gpsButtons.style.display = "block";
  titulo.style.display = "block";
  mensajeImg.style.display = "none";

  switch (distancia) {
    case 100:
      mensajeText.textContent = "¡Arrancamos!";
      mensajeImg.src = "ruta-inicio.jpg"; // Reemplaza con la imagen de inicio
      mensajeImg.style.display = "block";
      break;

    case 50:
      mensajeText.textContent = "¡Ya vamos por la mitad!";
      mensajeImg.src = "ruta-mitad.jpg"; // Reemplaza con la imagen de la mitad
      mensajeImg.style.display = "block";
      break;

    case 15:
      mensajeText.textContent = "¡Ya casi estamos!";
      mensajeImg.src = "ruta-casi.jpg"; // Reemplaza con la imagen casi llegando
      mensajeImg.style.display = "block";
      break;

    case 0:
      gpsButtons.style.display = "none"; // Esconder los botones de distancia
      titulo.style.display = "none"; // Esconder el título
      llegadaVentana.style.display = "flex"; // Mostrar la ventana de llegada
      break;

    default:
      mensajeText.textContent = "Por favor, selecciona una distancia válida.";
      mensajeImg.style.display = "none";
  }
}

function cerrarVentana() {
  // Cambiar todo el fondo a la imagen final de Tarragona
  document.body.style.backgroundImage = "url('tarragona-final.jpg')"; // Reemplaza con la imagen de fondo final
  document.body.style.backgroundSize = "cover";
  document.body.style.backgroundPosition = "center";
  document.getElementById("llegadaVentana").style.display = "none";
}

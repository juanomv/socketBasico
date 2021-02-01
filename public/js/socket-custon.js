var socket = io();
// escuchar
socket.on("connect", function () {
  console.log("conectado al servidor");
});

socket.on("disconnect", function () {
  console.log("perdimos conexion con el servidor");
});

/// enviar informacion

socket.emit(
  "enviarMensaje",
  {
    usuario: "juano",
    mensaje: "hola mundo",
  },
  function (res) {
    console.log("respuesta server: ", res);
  }
);

// recibir informacion

socket.on("enviarMensaje", function (mensaje) {
  console.log("Sevidor :", mensaje);
});

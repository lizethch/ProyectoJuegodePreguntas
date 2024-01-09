function alerta(radioButton) {
    const labelPadre = radioButton.parentElement;
    alert("Haz seleccionado la opción: " + labelPadre.textContent);
  }
  
  function alertaNombre() {
    const textoNombre = document.getElementById("nombre");
    alert("Bienvenida: " + textoNombre.value);
    window.location.replace("preguntas.html");
  }
  
  function alertaVolver() {
    window.location.replace("index.html");
  }
  
  function alertaResponder() {
    const todasLasPreguntasEstanMarcadas = validarPreguntasMarcadas(); //Antes de continuar, primero se valida preguntas
    if (todasLasPreguntasEstanMarcadas === true) {
      marcarRespuestasCorrectas("p1", 1); // Pregunta 1
      marcarRespuestasCorrectas("p2", 2); // Pregunta 2
      marcarRespuestasCorrectas("p3", 2); // Pregunta 3
      marcarRespuestasCorrectas("p4", 2); // Pregunta 4
    } else {
      alert("Antes de continuar, debe marcar todas las preguntas primero.");
    }
  }
  
  function marcarRespuestasCorrectas(inputName, inputValueCorrecto) {
    //esta funcion me permite obtener todos los elementos que tengan el name (p1,p2,p3,p4)
    const alternativas = document.getElementsByName(inputName);
    for (let i = 0; i < alternativas.length; i++) {
      //Obtenemos el label que es padre de input (alternativa)
      var labelPadre = alternativas[i].parentElement;
  
      // Pregunta si alternativa actual esta seleccionado
      if (alternativas[i].checked) {
        // Marcamos el label padre de color rojo
        labelPadre.setAttribute("class", "respuestaMarcada");
      }
  
      // Pregunta si alternativa actual es la respuesta correcta
      if (alternativas[i].value == inputValueCorrecto) {
        // Marcamos el label padre de color verde
        labelPadre.setAttribute("class", "respuestaCorrecta");
      }
    }
  }
  
  function validarPreguntasMarcadas() {
    // p1Alternativas = Lista de alternativas (radiobutton) de la PREGUNTA 1
    const p1Alternativas = document.getElementsByName("p1");
    // p1TieneAlternativaMarcada = Variable que indica si se marcó la PREGUNTA 1
    const p1TieneAlternativaMarcada = Array.prototype.some.call(
      p1Alternativas,
      function (radioButton) {
        return radioButton.checked;
      }
    );
  
    // p2Alternativas = Lista de alternativas (radiobutton) de la PREGUNTA 2
    const p2Alternativas = document.getElementsByName("p2");
    // p2TieneAlternativaMarcada = Variable que indica si se marcó la PREGUNTA 2
    const p2TieneAlternativaMarcada = Array.prototype.some.call(
      p2Alternativas,
      function (radioButton) {
        return radioButton.checked;
      }
    );
  
    // p3Alternativas = Lista de alternativas (radiobutton) de la PREGUNTA 3
    const p3Alternativas = document.getElementsByName("p3");
    // p3TieneAlternativaMarcada = Variable que indica si se marcó la PREGUNTA 3
    const p3TieneAlternativaMarcada = Array.prototype.some.call(
      p3Alternativas,
      function (radioButton) {
        return radioButton.checked;
      }
    );
  
    // p4Alternativas = Lista de alternativas (radiobutton) de la PREGUNTA 4
    const p4Alternativas = document.getElementsByName("p4");
    // p4TieneAlternativaMarcada = Variable que indica si se marcó la PREGUNTA 4
    const p4TieneAlternativaMarcada = Array.prototype.some.call(
      p4Alternativas,
      function (radioButton) {
        return radioButton.checked;
      }
    );
  
    // todasLasPreguntasEstanMarcadas = VERDADERO si todas las preguntas han sido marcadas
    // todasLasPreguntasEstanMarcadas = FALSO si no todas las preguntas han sido marcadas
    const todasLasPreguntasEstanMarcadas =
      p1TieneAlternativaMarcada === true &&
      p2TieneAlternativaMarcada === true &&
      p3TieneAlternativaMarcada === true &&
      p4TieneAlternativaMarcada === true;
  
    return todasLasPreguntasEstanMarcadas;
  }
  


//Validando que el texto solo contenga letras (valido para caractéres latinos, ingleses, o cualquiera que se pueda poner en mayúsculas)
  function soloLetras(nombre) {
    let valido = true;
    for (var i = 0; i < nombre.replace(/ /g, "").length; i++) {
      if (nombre.replace(/ /g, "").charAt(i).toLowerCase() === nombre.replace(/ /g, "").charAt(i).toUpperCase()) {
        valido = false;
      }
    }
    return valido;
  };

//Validando que el texto ingresado solo posea caracteres del alfabeto (incluyendo la Ñ o acentos) y/o valores numéricos.
  function soloLetrasNumeros(nombre) {
    let valido = true;
    for (var i = 0; i < nombre.replace(/ /g, "").length; i++) {
      if (nombre.replace(/ /g, "").charAt(i).toLowerCase() === nombre.replace(/ /g, "").charAt(i).toUpperCase() && isNaN(nombre.replace(/ /g, "").charAt(i))) {
        valido = false;
      }
    }
    return valido;
  };

//Validando que el mail ingresado no contenga caracteres latinos
//Obtenido de: https://es.stackoverflow.com/questions/142/validar-un-email-en-javascript-que-acepte-todos-los-caracteres-latinos
  function validarMail(mail) {

    let valido = false;
    if ( /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i.test(mail)) {
      valido = true;
    }
    return valido;
  };


(function(){

//Obtener todos los valores de los inputs ingresados o no por el usuario.

  let input_nombre = document.querySelector('#nombres_registro');
  let input_apellidos = document.querySelector('#apellidos_registro');
  let input_mail = document.querySelector('#mail_registro');
  let input_direccion = document.querySelector('#direccion_registro');
  let input_telefono = document.querySelector('#telefono_registro');
  let input_pais = document.querySelector('#pais_registro');
  let input_contraseña = document.querySelector('#contraseña_registro');
  let input_confirmar_contraseña = document.querySelector('#confirmar_contraseña_registro');
  let apellidos = document.querySelector('#apellidos_registro').value;
  let nombre = document.querySelector('#nombres_registro').value;
  let mail = document.querySelector('#mail_registro').value;
  let direccion = document.querySelector('#direccion_registro').value;
  let telefono = document.querySelector('#telefono_registro').value;
  let pais = document.querySelector('#pais_registro').value;
  let contraseña = document.querySelector('#contraseña_registro').value;
  let confirmacion_contraseña = document.querySelector('#confirmar_contraseña_registro').value;

  //Validando los ingresos de los inputs mediante el evento input
  //Mostrando al usuario la validación correspondiente, y el mensaje de ayuda
  //Definiendo variables de validacion por cada input, y cambiando su valor de acuerdo al evento.

  let nombre_valido = false;
  let apellidos_valido = false;
  let mail_valido = false;
  let direccion_valido = false;
  let telefono_valido = false;
  let pais_valido = false;
  let contraseña_valido = false;
  let confirmacion_contraseña_valido = false;

  input_nombre.addEventListener('input', function(){

    nombre = event.target.value;
    if(nombre !== '' && soloLetras(nombre)){
      input_nombre.classList.remove('is-invalid');
      input_nombre.classList.add('is-valid');
      nombre_valido = true;
    } else {
      input_nombre.classList.remove('is-valid');
      input_nombre.classList.add('is-invalid');
      nombre_valido = false;
    }
  });

  input_apellidos.addEventListener('input', function(){
    apellidos = event.target.value;
    if(apellidos !== '' && soloLetras(apellidos)){
      input_apellidos.classList.remove('is-invalid');
      input_apellidos.classList.add('is-valid');
      apellidos_valido = true;
    } else{
      input_apellidos.classList.remove('is-valid');
      input_apellidos.classList.add('is-invalid');
      apellidos_valido = false;
    }
  });

  input_mail.addEventListener('input', function(){

    mail = event.target.value;
    if(mail === '' || validarMail(mail) == false){
      input_mail.classList.remove('is-valid');
      input_mail.classList.add('is-invalid');
      mail_valido = false;
    } else {
      input_mail.classList.remove('is-invalid');
      input_mail.classList.add('is-valid');
      mail_valido = true;
    }
    });

    input_direccion.addEventListener('input', function(){

      direccion = event.target.value;
      if(direccion === '' || soloLetrasNumeros(direccion) === false){
        input_direccion.classList.remove('is-valid');
        input_direccion.classList.add('is-invalid');
        direccion_valido = false;
      } else {
        input_direccion.classList.remove('is-invalid');
        input_direccion.classList.add('is-valid');
        direccion_valido = true;
      }
    });

    input_telefono.addEventListener('input', function(){

      telefono = event.target.value;
      if(telefono === '' || isNaN(telefono) === true || telefono.length < 11 || telefono < 0){

        input_telefono.classList.remove('is-valid');
        input_telefono.classList.add('is-invalid');
        telefono_valido = false;
      } else {
        input_telefono.classList.remove('is-invalid');
        input_telefono.classList.add('is-valid');
        telefono_valido = true;
      }
    });

    input_pais.addEventListener('input', function(){

      pais = event.target.value;
      if(pais === ''){
        input_pais.classList.remove('is-valid');
        input_pais.classList.add('is-invalid');
        pais_valido = false;
      } else {
        input_pais.classList.remove('is-invalid');
        input_pais.classList.add('is-valid');
        pais_valido = true;
      }
    });

    input_contraseña.addEventListener('input', function(){

      contraseña = event.target.value;
      if(contraseña === '' || contraseña.length < 7 || contraseña.length > 14){
        input_contraseña.classList.remove('is-valid');
        input_contraseña.classList.add('is-invalid');
        contraseña_valido = false;
      } else {
        input_contraseña.classList.remove('is-invalid');
        input_contraseña.classList.add('is-valid');
        contraseña_valido = true;
        confirmacion_contraseña_valido = false;
        input_confirmar_contraseña.value = "";
        input_confirmar_contraseña.classList.remove('is-valid');
        input_confirmar_contraseña.classList.add('is-invalid');
      }
    });

    input_confirmar_contraseña.addEventListener('input', function(){

      confirmacion_contraseña = event.target.value;
      if(confirmacion_contraseña === '' || confirmacion_contraseña !== contraseña){
        input_confirmar_contraseña.classList.remove('is-valid');
        input_confirmar_contraseña.classList.add('is-invalid');
        confirmacion_contraseña_valido = false;
      } else {
        input_confirmar_contraseña.classList.remove('is-invalid');
        input_confirmar_contraseña.classList.add('is-valid');
        confirmacion_contraseña_valido = true;
      }
    });

//listener del click del boton confirmar suscripción.
  document.querySelector('#confirmar_suscripcion_btn').addEventListener('click', function(){

//obtenemos un div vacío, para rellenarlo con una alerta en el caso de que el ingreso de datos este incompleto
//mostramos el alert en caso de ingreso inválido
//en el caso de que el ingreso sea válido, llamamos el modal que muestra el mensaje de éxito

    let alerta_registro = document.querySelector('#alerts_suscripcion');
    alerta_registro.innerHTML = "";
    alerta_registro.classList.remove('alert', 'alert-warning', 'mt-1', 'mb-5');
    if(nombre_valido && apellidos_valido && mail_valido && direccion_valido && telefono_valido
      && pais_valido && contraseña_valido && confirmacion_contraseña_valido){
      $('#modal_exito').modal('show');
    } else {
      let mensaje_alerta = document.createElement('span');
      mensaje_alerta.textContent = 'Ingresa todos los campos correctamente';
      alerta_registro.appendChild(mensaje_alerta);
      alerta_registro.classList.add('alert', 'alert-warning', 'mt-1', 'mb-5');
      }
  });


})();

// Al hacer click en el botón de enviar tendrá que llamar a la la función validar 
// que se encargará de validar el formulario.
document.getElementById("idEnviar").addEventListener('click', validar, false);
let formulario=document.forms["idFormulario"]
//para probar que se guardaron bien los elementos, probamos en consola.
/****************************************************************
 * FUNCIÓN GENERAL DE VALIDACIÓN
 * Unificar los dos tipos de validación
 *          - Mediante JS
 *          - Mediante Api de acceso a validación de html
 ****************************************************************/
function validar(e){
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de ClassName
   // IMPORTANTE!!! Realizar limpieza del formulario, a nivel de Spam de error
   // IMPORTANTE!!! Deshabilitamos el botón

   for (let i=0; i< formulario.elements.length; i++){
       formulario.elements[i].className="";
   }
   document.querySelectorAll(".errorSpam").forEach(e=>e.innerHTML="")

   localStorage.removeItem('nombre');
   localStorage.removeItem('apellidos');
   localStorage.removeItem('edad');
   localStorage.removeItem('puntuacion');
   localStorage.removeItem('aciertos');
   localStorage.removeItem('fallos');

    if(validarAPIHTML(e) && validarJS(e) && confirm("¿Deseas enviar el formulario?")){
        

        for(var i = 0; i<= formulario.length - 1; i++){
            //e.preventDefault();
            //aquí puedes agregar mas validaciones que ocupes
            //para efectos de prueba, yo solo permite que se obtuvieran los input de text.
            if(formulario[i].tagName == 'INPUT'){
                //imprimir en consola el valor
                console.log(formulario[i].value);
                //la key sera el ID de tu elemento y despues se asigna el valor
                localStorage.setItem(formulario[i].name, JSON.stringify(formulario[i].value));
            }
        }

      //para probar que se guardaron bien los elementos, probamos en consola.
      console.log(localStorage);
      return true;

    }else{
        e.preventDefault();
        this.disabled = false;
        return false  
    }
    
}


/*******************************************************************************************/
function validarJS(eventopordefecto) {
    
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombre() && validarEdad();             
}
/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/

function validarNombre() {
    let inputNombre= formulario.elements["idNombre"]

    if (inputNombre.value == ""){        
        formulario.elements["idNombre"].className = "error";
        formulario.elements["idNombre"].focus();
        document.getElementById('idNombreError').innerHTML="El campo: " + formulario.elements["idNombre"].name + " no puede estar en blanco"
        return false
    }
    return true
}

/***************************************************************************/
/***************************************************************************/

function validarEdad() {
 
    let inputEdad=formulario.elements["idEdad"]
    
    // IMPORTANTE!! Realizar la validación de la edad mediante javascript.
    if (inputEdad.value == ""){        
        formulario.elements["idEdad"].className = "error";
        formulario.elements["idEdad"].focus();
        document.getElementById('idEdadError').innerHTML="El campo: " + formulario.elements["idEdad"].name + " no puede estar en blanco"
        
        return false
    } else if ((inputEdad.value<18) || (inputEdad.value>100)) {
        
        formulario.elements["idEdad"].className = "error";
        formulario.elements["idEdad"].focus();
        document.getElementById('idEdadError').innerHTML="El campo: " + formulario.elements["idEdad"].name + " tiene que ser mayor de 18"
        return false
    }
    return true;
}

function validarAPIHTML(eventopordefecto) {   
    //checkvalidity
    // Validamos cada uno de los apartados con llamadas a sus funciones correspondientes.
    return validarNombreHTML() && validarEdadHTML();             
}
/****************************************************************************
 * FUNCIÓN INDIVIDUALES DE CADA CAMPO
 /***************************************************************************/
    let nombre=formulario.elements["idNombre"];
    
    //Comprobar nombre
    function validarNombreHTML() {
        if(nombre.validity.valueMissing){    
            nombre.setCustomValidity("Debes poner algo en el campo"); 
            idNombreError.innerHTML = nombre.validationMessage;
            return false;
        }else if(nombre.validity.typeMismatch){
            nombre.setCustomValidity("Nombre inválido");
            idNombreError.innerHTML = nombre.validationMessage;
            return false;
        }else if(nombre.validity.patternMismatch){
            nombre.setCustomValidity("Patrón invalido");
            idNombreError.innerHTML = nombre.validationMessage;
            return false;
        }
        return true;
    }

   let edad=formulario.elements["idEdad"];
    //Comprobar edad
    function validarEdadHTML() {
        if(edad.validity.valueMissing){
            edad.setCustomValidity("El campo edad no debe estar vacío");
            idEdadError.innerHTML = edad.validationMessage;
            return false;
        }else if(edad.validity.rangeOverflow || edad.validity.rangeUnderflow){
            edad.setCustomValidity("Edad debe estar entre el valor máximo y el mínimo");
            idEdadError.innerHTML = edad.validationMessage;
            return false;
        }
        return true;
    }
 
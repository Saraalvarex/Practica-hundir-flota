function ubicarBarcos(clave) {

  let numBarcos = numeroBarcos.get(clave);

  while (numBarcos > 0) {
    //console.log("hola")
    //Retorna un entero aleatorio entre 1 (incluido) y 6 (excluido)

    let x = Math.floor(Math.random() * (9 - 0)) + 0;
    let y = Math.floor(Math.random() * (9 - 0)) + 0;

    /* Inicialización con datos */
    //Recorro array multidimensional
    for (let i = 0; i < filas - 1; i++) {
      for (let j = 0; j < columnas - 1; j++) {


        if ((i == x) && (j == y)) {

          //LANCHA
          if (numBarcos == 2) {
            document.getElementById(`id_${i}_${j}`).innerHTML = "X";
            j++;
            document.getElementById(`id_${i}_${j}`).innerHTML = "X";
          } else {

            //PORTAVIONES
            if (j > 3) {
              j--;
            }
            document.getElementById(`id_${i}_${j}`).innerHTML = "0";
            j++;
            document.getElementById(`id_${i}_${j}`).innerHTML = "0";
            j++;
            document.getElementById(`id_${i}_${j}`).innerHTML = "0";
          }
        }
      }
    }
    numBarcos--;
  }

}

function mostrar demo(){
  window.open("demo_tablero.html", "demostracion visual")
}
document.getElementById("id_0_0").style;
//padre e hijo
window.opener.hola

function ubicarBarcos(clave) {

  //Con la clave consigo los numeros de barcos asociados a la clave
  let numBarcos = numeroBarcos.get(clave);
  console.log(numBarcos);
  while (numBarcos > 0) {
    //console.log("hola")
    //Retorna un entero aleatorio entre 1 (incluido) y 6 (excluido)
    let x = Math.floor(Math.random() * (9 - 0)) + 0;
    let y = Math.floor(Math.random() * (9 - 0)) + 0;
    /* Inicialización con datos */
    //Recorro array multidimensional

   for (let i = 0; i < (chuleta.length); i++) {
      for (let j = 0; j < (chuleta[i].length); j++) {
        //Miro que me coincida los valores aleatorios con mi posicion en el array
        if ((i == x) && (j == y)) {

          //Comprobar que esta vacío el hueco (posicion)
          if (chuleta[i][j] == 0) {
            chuleta[i][j] = "X";
            j++;
            if (chuleta[i][j] == 0) {
              chuleta[i][j] = "X";
            } else {
              j--;
              i++;
              chuleta[i][j] = "X";
            }
          } else {
            x = Math.floor(Math.random() * 9);
            y = Math.floor(Math.random() * 9);
          }
       }
     }
    }
    numBarcos--;
  }
  // console.log(chuleta);
}

function numAleatorioLancha() {
  //Si es lancha
  return Math.floor(Math.random() * (8 - 0)) + 1;

}

function numAleatorioPortavion() {
  //Si es portaviones
  return Math.floor(Math.random() * (6 - 0)) + 1;
}
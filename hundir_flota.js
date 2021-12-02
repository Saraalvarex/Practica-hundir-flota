// Código js
//window.open("tablero.html","","height=300,width=300");

let tiposBarcos = new Set(["lanchas", "portaAviones"]);
let numeroBarcos = new Map([["lanchas", 2], ["portaAviones", 3]]);
let tamanoBarcos = new Map([["lanchas", 2], ["portaAviones", 3]]);
var chuleta = ([[], []]);
let filas = 10;
let columnas = 10;
let cantidad;
let tamanio;
const tablaPintar = document.querySelector("#tabla_pintar");

//Funciones
function crearChuleta() {
  chuleta = ([[], []]);
  for (let i = 0; i < 10; i++) {
    chuleta[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
      //Rellenamos array de ceros
      chuleta[i][j] = 0;
    }
  }
}

/*function dibujarBarcos(tiposBarcos, tamanoBarcos, numeroBarcos){
  tiposBarcos.forEach(element => {
    //let longitud = tamanoBarcos.get(element);
    //let cantidad = numeroBarcos.get(element);
    ubicarBarcos2(element);
  });
}*/

function ubicarBarcos(clave) {

  cantidad = numeroBarcos.get(clave);
  tamanio = tamanoBarcos.get(clave);

  for (i = 0; i < cantidad; i++) {
    let contador = 0;
    let entrar = true;

    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);

    while (contador != tamanio) {
      if (chuleta[x][y + contador] != 0)		//Si las posiciones donde se ha de colocar estan todas libres
      {
        entrar = false;
        i--;
        break;		//Si encuentro una que no esté libre paro la busqueda
      }
      contador++;
    }
    if (entrar)		//Solo entra si todas las posiciones donde se ha de colocar el barco estaban libre, y esto, lo coloca
      //for(j=x;j!=x+tamanio;j++){
      //chuleta[j]=tamanio+""+i;
      for (let j = 0; j < tamanio; j++) {
        chuleta[x][y + j] = "X";
      }
  }
}


function pintarTabla() {
  /* Inicialización con datos */
  //Recorro array multidimensional
  for (let i = 0; i < (chuleta.length); i++) {
    for (let j = 0; j < (chuleta[i].length); j++) {
      if (chuleta[i][j] == "X") {
        document.getElementById(`id_${i}_${j}`).style.backgroundColor = "lightblue";
      } else {
        document.getElementById(`id_${i}_${j}`).style.backgroundColor = "lightblue";
      }
      document.getElementById(`id_${i}_${j}`).innerHTML = chuleta[i][j];
    }
  }
}

function demostracionVisual() {
  
  let pagina1 = window.open("chuleta.html", "Chuleta", "width=900px, height=800px");
    
}

function VerInformacionBarcos() {
  let pagina2 = window.open("", "Informacion", "width=400px, height=200px");
  
  let iterableBarcos = tiposBarcos[Symbol.iterator]();

  let veces = tiposBarcos.size;
  pagina2.document.body.innerHTML+="INFORMACION SOBRE EL JUEGO:"+"<br><br>"
  /*
  for (let i = 0; i < veces; i++) {
    pagina2.document.body.innerHTML +="Del tipo de barco: "+ iterableBarcos.next().value //+" hay "+ cantidad + " unidades <br>"
  }
  */
  for (const [clave, cantidadBarcos] of numeroBarcos) {
    pagina2.document.body.innerHTML +="Del tipo de barco: "+clave + ' hay ' + cantidadBarcos +" unidades <br>"
  }
  for (const [clave, tamanio] of tamanoBarcos){
    pagina2.document.body.innerHTML +="El barco: "+clave + ' tiene un tamaño: ' + tamanio +"<br>"
  }
}


//Prueba
window.onload = function () {
  crearChuleta();
  //setInterval(() => {
  ubicarBarcos("lanchas");
  ubicarBarcos("portaAviones");
  pintarTabla();
  //}, 3000);
  //dibujarBarcos(tiposBarcos, tamanoBarcos, numeroBarcos);
}


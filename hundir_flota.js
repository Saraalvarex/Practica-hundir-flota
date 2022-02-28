// Código js
//window.open("tablero.html","","height=300,width=300");

let tiposBarcos = new Set(["lanchas", "portaAviones"]);
let numeroBarcos = new Map([["lanchas", 2], ["portaAviones", 3]]);
let tamanoBarcos = new Map([["lanchas", 2], ["portaAviones", 3]]);
var chuleta = ([[], []]);
var tablaVista = ([[], []]);
let filas = 10;
let columnas = 10;
let cantidad;
let tamanio;
let barcos = [];
//const tablaPintar = document.querySelector("#tabla_pintar");

let puntuacion = 0;
document.getElementById("idPuntuacion").innerHTML+=puntuacion;
let aciertos = 0;
document.getElementById("idAciertos").innerHTML+=aciertos;
let fallos = 0;
document.getElementById("idFallos").innerHTML+=fallos;

//Funciones
function crearTablaVista() {
  tablaVista= ([[], []]);
  for (let i = 0; i < 10; i++) {
    tablaVista[i] = new Array(10);
    for (let j = 0; j < 10; j++) {
      //Rellenamos los names del array de ceros
      document.getElementById(`id_${i}_${j}`).setAttribute("name", "0");
      //Rellenamos array de ceros
      tablaVista[i][j] = 0;
    }
  }
}

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


function ubicarBarcos(clave) {

  cantidad = numeroBarcos.get(clave);
  tamanio = tamanoBarcos.get(clave);

  for (i = 0; i < cantidad; i++) {
    let contador = 0;
    let entrar = true;

    let x = Math.floor(Math.random() * 9);
    let y = Math.floor(Math.random() * 9);

    while (contador != tamanio) {
      if(chuleta[x][y + contador] != 0)
      	//Si las posiciones donde se ha de colocar estan todas libres
      {
        entrar = false;
        i--;
        break;		//Si encuentro una que no esté libre paro la busqueda
      }
      contador++;
    }
    if (entrar) {		//Solo entra si todas las posiciones donde se ha de colocar el barco estaban libres, y esto, lo coloca
      //for(j=x;j!=x+tamanio;j++){
      //chuleta[j]=tamanio+""+i;
      let barcoTemp = [];

      for (let j = 0; j < tamanio; j++) {
        document.getElementById(`id_${x}_${y+j}`).setAttribute("name", "X")
        chuleta[x][y + j] = "X";
        barcoTemp.push({
          x: x,
          y: (y+j),
          hundido: false
        })
      }
      barcos.push({
        barco: barcoTemp,
        numCeldasHundidas: 0
      });
    }
  }
}

function pintarTabla() {
  /* Inicialización con datos */
  //Recorro array multidimensional
  for (let i = 0; i < (chuleta.length); i++) {
    for (let j = 0; j < (chuleta[i].length); j++) {
      if ((document.getElementById(`id_${i}_${j}`).getAttribute("name")) == "X") {
        document.getElementById(`id_${i}_${j}`).style.backgroundColor = "lightblue";
      } else {
        document.getElementById(`id_${i}_${j}`).style.backgroundColor = "lightblue";
      }
      document.getElementById(`id_${i}_${j}`).setAttribute("name",  chuleta[i][j]);
    }
  }
}

function demostracionVisual() {
  let pagina1 = window.open("chuleta.html", "Chuleta", "width=900px, height=800px");
}

function VerInformacionBarcos() {
  let pagina2 = window.open("", "Informacion", "width=400px, height=200px");
  
  //let iterableBarcos = tiposBarcos[Symbol.iterator]();

  //let veces = tiposBarcos.size;
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
//EVENTO PARA DISPARAR

addEventListener("click", disparar);

function disparar(e){
  //Si no hemos disparado en esa casilla entramos
  if (e.target.style.backgroundColor=='lightblue'){
    //id_${i}_${j} esta es la y
    //console.log("y: "+e.target.id[3])
    //Estamos cogiendo la parte del id de html id_${i}_${j} esta es la x
    //console.log("x: "+e.target.id[5])
    //console.log(e.target.getAttribute("name"))
    let x=e.target.id[3];
    let y=e.target.id[5];

    if (e.target.getAttribute("name")=="X"){
      e.target.style.backgroundColor="red";
      aciertos++;
      document.getElementById("idAciertos").innerHTML=aciertos;
      localStorage.setItem('aciertos', aciertos);
      console.log("¡tocado!")

    } else if (e.target.getAttribute("name")=="0"){
      e.target.style.backgroundColor="#59ABE3";
      fallos++;
      document.getElementById("idFallos").innerHTML=fallos;
      localStorage.setItem('fallos', fallos);
      console.log("¡agua!")
    }else if (e.target.style.backgroundColor="red"){
      fallos = fallos;
    }
    
    
    //recorro array de barcos y luego los datos de cada barco
    for (const item of barcos) {

        item.barco.forEach(celda => {
            if(x == celda.x && y == celda.y){
              celda.hundido = true;
              item.numCeldasHundidas++;
            }
        })
        // Si el numero de celdas hundidas es igual a la longitud del barco, el barco se hunde y se suma un punto.
        if (item.numCeldasHundidas == item.barco.length){
          console.log("¡tocado y hundido!");
          item.hundido = true;
          puntuacion++;
          document.getElementById("idPuntuacion").innerHTML=puntuacion;
          localStorage.setItem('puntuacion', puntuacion);
          //console.log(jugador1._puntuacion)
          item.numCeldasHundidas=0;
        }
    }
  }
  //Si todas los names "X" están de color rojo termino el juego
  if (puntuacion==5){
    console.log("¡Has ganado!");
  }
  //document.getElementById(`id_${x}_${y}`).innerHTML = chuleta[i][j];
}

//Pruebas
window.onload = function () {
  
  crearTablaVista();
  crearChuleta();
  ubicarBarcos("lanchas");
  ubicarBarcos("portaAviones");
  pintarTabla();
}
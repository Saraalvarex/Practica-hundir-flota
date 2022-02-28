let pagina2 

//Clase persona
class Persona {
    //1.Constructor
    constructor(nombre, apellidos, edad) {
        this._nombre = nombre;
        this._apellidos = apellidos;
        this._edad = edad;
    }

    get nombre() {
        return this._nombre;
    }
    get apellidos() {
        return this._apellidos;
    }
    get edad() {
        return this._edad;
    }

    set nombre(valor) {
        this._nombre = valor;
    }
    set apellidos(valor) {
        this._apellidos = valor;
    }
    set edad(valor) {
        this._edad = valor;
    }

    toString() {
        return this.nombre + ", " + this.apellidos
    }
    //Metodo estático que me devuelve...
    static argumentos() {
        return "nombre , apellidos, edad";
    }
    
    VerInformacion(){
        pagina2 = window.open("", "Informacion", "width=400px, height=200px");
        //pagina2.document.body.innerHTML+="<br>"+"INFORMACION:"+"<br><br>"
        //Al poner toString() aquí, me coje el toString de la clase hija por eso
        //los he puesto de esta manera        *                     *
    }
}

//PROTOTYPE    
Persona.prototype.VerInformacionProto=()=>console.log ("Estoy llamando a prototype")

//Clase hija autor
class Autor extends Persona {
//2.Constructor de autor
    constructor(nombre, apellidos, edad, github, lenguaje, version) {
        super(nombre, apellidos, edad)
        this._github = github;
        this._lenguaje = lenguaje;
        this._version = version;
    }

    get github() {
        return this._github;
    }
    get lenguaje() {
        return this._lenguaje;
    }
    get version() {
        return this._version;
    }

    set github(valor) {
        this._github = valor;
    }
    set lenguaje(valor) {
        this._lenguaje = valor;
    }
    set version(valor) {
        this._version = valor;
    }

    //Metodo toString me devuelve... (concatena)
    toString() {
        super.toString();
        return "github: "+ this.github + ", lenguaje utilizado: " + this.lenguaje + ", versión: "+  this.version;
    }
    //para la edad (suma)
    valueOf() {
        return this.edad;
    }
    
    VerInformacion(){
        super.VerInformacion();
        pagina2.document.body.innerHTML+="Nombre: "+this._nombre+", apellidos: "+this._apellidos+", edad: "+this._edad;
        pagina2.document.body.innerHTML+=", "+this.toString()+"<br><br>"
    }

    completarInfoAutor(){
        this._nombre = "Pepe";
        this._apellidos = "López Vazquez";
        this._edad = "17";
        this._github = "anaconda34";
        this._lenguaje = "JS";
        this._version = "3.1";
    }
}

//Clase hija jugador
class Jugador extends Persona {
    //3.Constructor de jugador
    constructor(nombre, apellidos, edad, id, puntuacion, aciertos, fallos) {
        super(nombre, apellidos, edad)
        this._id = id;
        this._puntuacion = puntuacion;
        this._aciertos = aciertos;
        this._fallos = fallos;
    }

    get id() {
        return this._id;
    }

    get aciertos() {
        return this._aciertos;
    }

    get fallos() {
        return this._fallos;
    }

    get puntuacion() {
        return this._puntuacion;
    }

    set id(valor) {
        this._id = valor;
    }

    set aciertos(valor) {
        this._aciertos = valor;
    }

    set fallos(valor) {
        this._fallos= valor;
    }

    set puntuacion(valor) {
        this._puntuacion = puntuacion;
    }

    toString() {
        super.toString()
        return (
        ", identificador: "+this.id+"<br>"+
        this.#mayorEdad(this.edad)
        )
    }

    //para la puntuacion
    valueOf() {
        return this.puntuacion;
    }
    º   
    VerInformacion(){
        super.VerInformacion();
        pagina2.document.body.innerHTML+="Nombre: "+localStorage.getItem("nombre")+" ,apellidos: "+localStorage.getItem("apellidos")+
        " ,edad: "+localStorage.getItem("edad")+",puntuacion: "+localStorage.getItem("puntuacion")
        +", Aciertos: "+localStorage.getItem("aciertos")+", Fallos: "+localStorage.getItem("fallos")
    }

    completarInfoJugador(){
        this._nombre = formulario.elements["idNombre"].value;
        this._apellidos = formulario.elements["idApellidos"].value;
        this._edad = formulario.elements["idEdad"].value;
        this._id = "01";
        this._puntuacion = formulario.elements["idPuntuacion"].value;
        this._aciertos = formulario.elements["idAciertos"].value;
        this._fallos = formulario.elements["idFallos"].value;
    }

    //Metodo privado que dependiendo de la edad me imprime una cosa u otra
    #mayorEdad(edad) {
        if (edad > 18) {
            return "Tienes "+edad+" años, eres mayor de edad, puedes jugar!";
        } else {
            return "Tienes "+edad+" años, eres menor de edad, no puedes jugar";
        }
    }
}


//Prueba persona

    let autor1= new Autor()
    autor1.completarInfoAutor()

    let jugador1= new Jugador()
    jugador1.completarInfoJugador()
    
    //Me devuelve true si la edad de autor1 es mayor que la de jugador1 (valueOf)
    console.log(autor1>jugador1)
    
    autor1.VerInformacionProto()
    jugador1.VerInformacionProto()


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
        pagina2.document.body.innerHTML+= "Nombre: "+this.nombre +  ", apellidos: "+ this.apellidos;
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
    constructor(nombre, apellidos, edad, id) {
        super(nombre, apellidos, edad)
        this._id = id;
        //this.puntacion=puntuacion;
        //this.aciertos=aciertos;
        //this.fallos=fallos;
    }

    get id() {
        return this._id;
    }

    set id(valor) {
        this._id = valor;
    }

    toString() {
        super.toString()
        return (
        ", identificador: "+this.id+"<br>"+
        this.#mayorEdad(this.edad)
        )
    }

    /*para la puntuacion
    valueOf() {
        return this.puntuacion;
    }
    */
    VerInformacion(){
        super.VerInformacion();
        pagina2.document.body.innerHTML+=", "+this.toString()+"<br><br>"
    }

    completarInfoJugador(){
        this._nombre = "Arturo";
        this._apellidos = "López Gomez";
        this._edad = "15";
        this._id = "02";
    }

    //Metodo privado que dependiendo de la edad me imprime una cosa u otra
    #mayorEdad(edad) {
        if (edad > 18) {
            return "Tienes "+edad+" años, eres mayor de edad, puedes jugar!"
        } else {
            return "Tienes "+edad+" años, eres menor de edad, no puedes jugar"
        }
    }
}

//Prueba persona
    //                 (nombre, apellidos, edad, id, puntuacion, aciertos, fallos)
    let jugador1= new Jugador()
    jugador1.completarInfoJugador()
    //                 (nombre, apellidos, edad, github, lenguaje, version)
    let autor1= new Autor('Ana', 'Vargas', '33', 'anaconda34', 'JS', '3.0')
    autor1.completarInfoAutor()
    //Me devuelve true si la edad de autor1 es mayor que la de jugador1 (valueOf)
    console.log(autor1>jugador1)
    autor1.VerInformacionProto()

  

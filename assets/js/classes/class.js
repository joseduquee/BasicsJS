

class Persona {

    //propiedas y metodos estaticos
    //luego propiedades de la clase
    static _conteo = 0;
    static get conteo() {
        return Persona._conteo + ' instancias';
    }

    static mensaje() {
        console.log(this.nombre);
        console.log('Hola soy un metodo estatico');
    }

    nombre = '';
    codigo = '';
    frase = '';
    comida = '';

    //contrustors
    constructor(nombre, codigo, frase ) {
        this.nombre = nombre;
        this.codigo = codigo;
        this.frase = frase;
        Persona._conteo ++;
    }

    //set y get
    set setComidaFavoria( comida ){
        this.comida = comida.toUpperCase();
    }

    get getComidaFavorita() {
        return `La comida favorita de ${ this.nombre } es ${this.comida}`;
    }





    //metodos
    quienSoy() {
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);
    }

    miFrase() {
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }

};


const alex = new Persona('Alex', 'Jose', 'Im so happy');
const ironman = new Persona('Tony', 'stark', 'Im ironman');

// Persona._conteo = 2;

// console.log( ironman );

alex.miFrase();

alex.setComidaFavoria = 'Esparragos';
// alex.nemesis = 'Duende verde'

// console.log( alex.getComidaFavorita );

// console.log( alex );

console.log('Conteo statico', Persona._conteo);
console.log(Persona.conteo);
Persona.mensaje();


Persona.propiedadExternas = 'Hola propiedad externa';
console.log(Persona.propiedadExternas);
console.log(Persona);
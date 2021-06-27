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
    constructor(nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase' ) {
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


class Heroe extends Persona {

    clan = 'sin clan';

    constructor(nombre, codigo, frase) {

        super(nombre, codigo, frase);
        this.clan = 'Los vengadores';
    }

    quienSoy() {
        console.log(`Soy ${this.nombre}, del clan ${this.clan}`);
        super.quienSoy();
    }

}


const spiderman = new Heroe('Peter', 'spiderman', 'Im so happy');

// const spiderman = new Heroe();

console.log( spiderman );
spiderman.quienSoy();


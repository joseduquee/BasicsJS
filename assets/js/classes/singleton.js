

class PersonaService {

    //propiedades
    static #instancia; //undefined
    nombre = '';

    //constructor
    constructor( nombre = '' ) {

        if( !!PersonaService.#instancia ) {
            return PersonaService.#instancia;
        }

        PersonaService.#instancia = this;
        this.nombre = nombre;

        // return this;

    }

};

const instancia1 = new PersonaService('Ironman');
const instancia2 = new PersonaService('Spiderman');
const instancia3 = new PersonaService('Black Panther');

console.log(`Nombre es la instancia1 es: ${ instancia1.nombre }`);
console.log(`Nombre es la instancia2 es: ${ instancia2.nombre }`);
console.log(`Nombre es la instancia3 es: ${ instancia3.nombre }`);
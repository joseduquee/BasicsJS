let a = 10;
let b = a;
a = 30;

console.log( {a, b} );

let juan = { nombre: 'Juan' };
//operador especial para separar todas las propiedas y los valores de un objeto
//operador spread ... esto rompe la referencia de un objeto
let ana = { ...juan };
ana.nombre = 'ana';
console.log({ juan, ana });


const cambiaNombre = ( { ...persona } ) => {
    persona.nombre = 'Tony';
    return persona;
}

let peter = { nombre: 'Peter'};
let tony = cambiaNombre( peter );
console.log( {peter, tony } );

//arreglos
const frutas = ['Manzanas', 'Pera', 'Piña'];
//como es un array uso llaves y el operador spread .... y asi rompe la asignacion por referencia
// const otrasFrutas = [...frutas];
//otra forma de hacerlo es con slice;
console.time('slice');
const otrasFrutas = frutas.slice(); 
console.timeEnd('slice');

//con este time medir tiempos en js, spread es mas rapido
console.time('spread');
const otrasFrutas2 = [...frutas];
console.timeEnd('spread');

otrasFrutas.push('Mango');

console.table( { frutas, otrasFrutas} );
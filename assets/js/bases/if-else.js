

let a = 10;

if ( a >= 10) {
    console.log('A es mayor o igual a 10');
} else {
    console.log('A es menor que 10');
}

const hoy = new Date();
let dia = hoy.getDay();

console.log( hoy );
console.log( {dia} );

if( dia === 0) {
    console.log('Domingo');
} else if( dia === 1) {
    console.log('Lunes');
} else if(dia === 2) {
    console.log('Martes');
} else {
    console.log('No es lunes ni martes ni domingo');
}

//ejercicio con objetos sin if else
dia = 3;

const days = {
    0: 'domingo',
    1: 'lunes',
    2: 'martes',
    3: 'miercoles',
    4: 'jueves',
    5: 'viernes',
    6: 'sabado'
};

const daysArr = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado'];

console.log( days[2] || 'Dia no definido');
console.log( daysArr[dia] || 'Dia no definido');



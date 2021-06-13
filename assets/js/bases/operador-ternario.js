

const dia = 1;
const horaActual = 10;

let horaApertura;
let mensaje; //Esta abierto, esta acerrado, hoy abrimos a las xx;

horaApertura = ( [0,6].includes(dia) ) ? 9 : 11;

mensaje = (horaActual >= horaApertura) ? 'Esta abierto' : 
    `Esta cerrado, hoy abrimos a las ${horaApertura}`;

console.log( {horaApertura, mensaje} );

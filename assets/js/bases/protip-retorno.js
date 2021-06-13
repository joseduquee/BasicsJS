
// function crearPersona( nombre, apellido ) {
//     return { nombre,apellido }
// }

//con las llaves solo hace referencia a los parametros, mientras con los parentesis indico a js
//que lo que regreso es el valor de esos parametros
const crearPersona = ( nombre, apellido ) => ({ nombre,apellido });



const persona = crearPersona( 'Fernando', 'Herrera' );
console.log( persona );

//solo este modelo de function puede usar arguments
function imprimeArgumentos() {
    console.log( arguments );
}

//en funciones de fecha debo pasar arguments como parametro y solo imprime el primero
//los puntos hacen referencia a un parametro rest, imprime todos los args pasados
//despues del paramtro rest no puede venir ningun argumento
//si quiero declarar algo antes del rest como edad lo debo agregar
const imprimeArgumentos2 = ( edad, ...args ) => {
    // console.log({ edad, args });
    return args;
}

//de esta forma creo con [] asigno variables de cada argumento que extraigo de la funcion
const [ casado, vivo, nombre, saludo ] = imprimeArgumentos2(10, true, false, 'Fernando', 'Hola');
console.log({ casado, vivo, nombre, saludo });

//si solo me interesa una propieda uso entre {} para desestructuras
const { apellido: nuevoApellido } = crearPersona( 'Fernando', 'Herrera' );
console.log({ nuevoApellido });


const tony = {
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo: false,
    edad: 40,
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
};

// const imprimePropiedades = ( personaje ) => {

//     console.log( 'nombre',personaje.nombre );
//     console.log( 'codeName',personaje.codeName );
//     console.log( 'vivo',personaje.vivo );
//     console.log( 'edad',personaje.edad );
//     console.log( 'trajes',personaje.trajes );

// }
//desestructuracion de argumentos con las {}
const imprimePropiedades = ({ nombre, codeName, vivo, edad = 15, trajes }) => {

    console.log({nombre});
    console.log({codeName});
    console.log({vivo});
    console.log({edad});
    console.log({trajes});
}

imprimePropiedades( tony );
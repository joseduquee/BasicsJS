const persona = {
    nombre: 'Alex',
    edad: 20,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const persona2 = {
    nombre: 'Pedro',
    edad: 29,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const persona3 = {
    nombre: 'Melissa',
    edad: 33,
    imprimir(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

function Persona( nombre, edad) {
    console.log('Se ejecuto esta linea');
    this.nombre = nombre;
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${ this.nombre } - edad: ${ this.edad }`);
    }
}

const maria = new Persona('Maria', 18);
const carlos = new Persona('Carlos', 34);
console.log( maria );
maria.imprimir();
carlos.imprimir();
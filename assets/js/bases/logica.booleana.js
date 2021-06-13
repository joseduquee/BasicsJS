const regresaTrue = () => {
    console.log('Regresa true');
    return true;
}

const regresaFalse = () => {
    console.log('Regresa false');
    return false;
}

console.warn('Not a la negacion');
console.log(true);
console.log(!true);
console.log(!false);

console.log( !regresaFalse() );


console.warn('And');
console.log( true && true );
console.log( true && !false );

console.log('==========');
//si ya la primera es false no sigue ejecutando
console.log( !regresaFalse() && regresaTrue() );

console.warn('OR');
console.log( true || true );
console.log( true || !false );

console.log('========');
console.log( regresaTrue() || regresaFalse() );

console.warn('Asginaciones');

const soyUndefined = undefined;
const soyNull = null;
const soyFalso = false;

//devuelve el ultimo valor que cumpla la condiciones
//las aginaciones apenas cumplan las condiciones sean de && o || deja de ejecutarse
const a1 = false && 'Hola Mundo' && 150;
const a2 = 'Hola' && 'Mundo' && soyFalso;
const a3 = soyFalso || 'Ya no soy falso';
const a4 = soyFalso || soyUndefined || soyNull || 'Ya no soy falso';

console.log( {a1, a2, a3, a4} );


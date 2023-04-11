
// DECLARO UN ARRAY CON LAS LETRAS DEL ABECEDARIO ORDENADAS//
const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];

console.log('Mi array: '+JSON.stringify(array))

/**------------------------------------
 * ! ALGORITMO DE BUSQUEDA SECUENCIAL
 * @param {*} array
 * @param {*} letter
---------------------------------------*/
const BusquedaSecuencial = (array, letter) => {

    for (let i = 0; i < array.length; i++) {

        if (array[i] == String(letter).toLowerCase()) {

            return 'La letra '+String(letter).toUpperCase()+' ha sido encontrada en la posicion '+i+' del array';

        }

    }

}

/**------------------------------------
 * ! ALGORITMO DE BUSQUEDA POR SALTOS
 * @param {*} array
 * @param {*} letter
---------------------------------------*/
const BusquedaPorSalto = (array, letter) => {
    
    const length = array.length;

    let step = Math.floor(Math.sqrt(length));

    let i = 0;

    while (array[Math.min(step, length) - 1] < String(letter).toLowerCase()) {
        i = step;
        step += step;
        if (i >= length) {
            return;
        }
    }

    let upperBound = Math.min(step, length);

    while (array[i] < String(letter).toLowerCase()) {
        i++;
        if (i == upperBound) {
            return;
        }
    }

    if (array[i] == String(letter).toLowerCase()) {
        return 'La letra '+String(letter).toUpperCase()+' ha sido encontrada en la posicion '+i+' del array';
    }

    return;

}

let letter = '';


const regex = new RegExp('[a-zA-Z]');


do{
    
    letter = prompt('Escriba una letra')
    

    if(regex.test(letter) && letter.length == 1){

        opcion = prompt('Elija un algoritmo')

        if(opcion==1 || opcion==2){
            if(opcion==1){
                alert('Busqueda Secuencial: '+BusquedaSecuencial(array, letter))
            }
    
            if(opcion==2){
                alert('Busqueda Por Saltos: '+BusquedaPorSalto(array, letter))
            }
        } else {
            alert('Opcion no disponible')
            opcion = ''
        }
        
    } else {

        alert('Solo se aceptan letras del abecedario')
        letter = ''

    }

} while(!regex.test(letter) && letter.length != 1);


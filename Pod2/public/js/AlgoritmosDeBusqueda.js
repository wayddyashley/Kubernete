
const array = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","u","v","w","x","y","z"];
const array2 = ["q","p","i","r","c","z","w","u","e","a","y","l","v","n","f","x","j","d","s","m","b","g","k","h","o"];

console.log('Mi array: '+JSON.stringify(array))

/**---------------------------------
 * ! ALGORITMO DE BUSQUEDA BINARIA
 * @param {*} array
 * @param {*} letter
------------------------------------*/
const BusquedaBinaria = (array, letter) => {

    let low = 0;

    let high = array.length - 1;

    while (low <= high) {

        let i = Math.floor((low + high) / 2);

        let mid = array[i];

        if (mid == String(letter).toLowerCase()) {

            return 'La letra '+String(letter).toUpperCase()+' ha sido encontrada en la posicion '+i+' del array';

        }

        if (mid > String(letter).toLowerCase()) {

            high = i - 1;

        } else {

            low = i + 1;

        }

    }

    return;

}

let letter = '';
const regex = new RegExp('[a-zA-Z]');

do{
    
    letter = prompt('Escriba una letra')

    if(regex.test(letter) && letter.length == 1){

        alert('Busqueda Binaria: '+BusquedaBinaria(array, letter))

    } else {

        alert('Debe escribir una letra del abecedario')
        letter = ''

    }

} while(!regex.test(letter) && letter.length != 1);


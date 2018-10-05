/**
 *
 *   Bases Node
 *
 */

const argv = require('./config/yargs').argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

// let argv2 = process.argv;
// let base = argv2[2].split('=')[1];
// console.log(base);

let comando = argv._[0];
let base = argv.base;
let limite = argv.limite;

switch (comando) {
    case 'listar':
        // Manera dificil
        // listarTabla(base, limite)
        //     .then(data => console.log(data))
        //     .catch(e => console.log(e));

        // Manera simple
        listarTabla(base, limite);
        break;
    case 'crear':
        crearArchivo(base, limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo.green }`))
            .catch(e => console.log(e));
        break;
    default:
        console.log('Comando no reconocido');
        break;
}
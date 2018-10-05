/**
 * 
 *  En este archivo se guarda toda la logica de la aplicación
 *  
 */


// requieres
const fs = require('fs');
const colors = require('colors');


let data = '';

let listarTabla = (base, limite) => {

    console.log('======================='.green);
    console.log(`Tabla del ${ base }`.green);
    console.log('======================='.green);


    for (let i = 1; i <= limite; i++) {

        console.log(`${ base } * ${ i } = ${ base * i }\n`);

    }
}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${ base } no es un número.`);
        }


        for (let i = 1; i <= limite; i++) {

            data += `${ base } * ${ i } = ${ base * i }\n`;

        }

        fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
                if (err)
                    reject(err);
                else
                    resolve(`Tabla-${ base }.txt`);



            }

        );

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}
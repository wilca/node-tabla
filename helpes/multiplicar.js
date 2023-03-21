const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors')

const crearArchivoTabla = async({base = 6, l = false, h = 10} = argv) =>{
    try {
        let output = '';
        let consola = '';

        consola += '================= \n'.green;
        consola += `     tabla del: ${colors.blue(base)} \n`.green;
        consola += '================= \n'.green;

        for (let index = 1; index <= h; index++) {
            output += `${base} x ${index} = ${index * base} \n`;
            consola += `${base} ${'x'.green} ${index} ${'='.green} ${colors.magenta(index * base)} \n`;
        }

        if(l){
            console.log(consola);
        }

        fs.writeFileSync(`./salida/tabla-${base}.txt`, output);
        // console.log(`tabla-${base}.txt creado.`);
        return `tabla-${base}.txt creado`;   
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivoTabla
}
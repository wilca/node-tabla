const { crearArchivoTabla } = require('./helpes/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')

console.clear();

let base = 4;


// fs.writeFile(`tabla-${numberTable}.txt`, output, (err) =>{
//     if(err) throw err;
//     console.log(`tabla-${numberTable}.txt creada.`);
// });

//leer argumento de la consulta 
// const [, , arg = 'base=6'] = process.argv;
// const [, bs = 6] = arg.split('=');

// console.log(bs);

// yargs
// console.log(process.argv);
// console.log(argv);
// console.log('base: yargs', argv.base);

crearArchivoTabla(argv)
.then(nombreArchivo => console.log(nombreArchivo.rainbow))
.catch(err => console.log(err));


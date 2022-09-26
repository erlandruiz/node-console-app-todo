require ('colors');


const { mostrarMenu5, pausa } = require('./helpers/mensaje5');


console.clear();


const main = async()=>{
    console.log('Hola Mundo');

    let opt = '';

    do {
        opt = await mostrarMenu5();
        console.log({opt});

        if (opt !=='0' ) await pausa();

    } while ( opt !== '0');
    // pausa();

}

main();
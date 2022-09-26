require ('colors');
const { inquireMenu2, pausa } = require('./helpers/inquirer2');
// const Tarea = require('./models/tarea');
const Tareas = require('./models/tareas');






console.clear();


const main = async()=>{
    console.log('Hola Mundo');

    let opt = '';

    do {
        // opt = await inquireMenu2();
        // console.log({opt});
        const tareas = new Tareas();

        const tarea = new Tarea('Comprar comida');

        tareas._listado[tarea.id] = tarea;
        console.log(tareas);
        await pausa();



        

    } while ( opt !== '0');
    // pausa();

}

main();
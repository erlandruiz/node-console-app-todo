require ('colors');
const { inquireMenu2, pausa } = require('./helpers/inquirer2');

const Tareas = require('./models/tareas');








const main = async()=>{
    console.log('Hola Mundo');

    let opt = '';

    do {
        opt = await inquireMenu2();
        console.log({opt});
       

      
        
        await pausa();



        

    } while ( opt !== '0');
    // pausa();

}

main();
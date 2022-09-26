require ('colors');
// const { inquireMenu2, pausa } = require('./helpers/inquirer2');
const { inquireMenu3,
        pausa,
        leerInput
} = require('./helpers/inquirer3');

const Tareas3 = require('./models/tareas3');








const main = async()=>{
    // console.log('Hola Mundo');

    let opt = '';
    const tareas = new Tareas3();

    do {
        //Imprimir menú
        opt = await inquireMenu3();
        
        switch (opt) {
            case '1':
                // crear opcion
                const desc = await leerInput('Descripcion:');
                tareas.crearTarea(desc);
            break;
            
            case '2' :
                console.log(tareas.listadoArr);
            
            break;
        
            
        }
       

      
        
        await pausa();



        

    } while ( opt !== '0');
    // pausa();

}

main();
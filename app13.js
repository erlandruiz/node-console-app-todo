require ('colors');
const { guardarDB2 , leerDB } = require('./helpers/guardarArchivo2');
// const { inquireMenu2, pausa } = require('./helpers/inquirer2');
const { inquireMenu3,
        pausa,
        leerInput
} = require('./helpers/inquirer3');

const Tareas4 = require('./models/tareas4');








const main = async()=>{
    // console.log('Hola Mundo');

    let opt = '';
    const tareas = new Tareas4();
    const tareasDB = leerDB();
    if (tareasDB ){
        tareas.cargarTareasFromArray(tareasDB);

        // establecer las tareas
        //TODO: cargar tareas
    }

    // await pausa();

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
                tareas.listadoCompleto();
            break;
                // console.log(tareas.listadoArr);
            
            case '3' : // listar completadas 
                tareas.listarPendientesCompletadas(true);
            break;
                // console.log(tareas.listadoArr);
            
            case '4' : // Listar pendientes
                tareas.listarPendientesCompletadas(false);
            break;
                // console.log(tareas.listadoArr);


            break;
        
            
        }

        guardarDB2(tareas.listadoArr);
       

      
        
        await pausa();



        

    } while ( opt !== '0');
    // pausa();

}

main();
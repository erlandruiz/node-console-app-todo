require ('colors');
const { guardarDB2 , leerDB } = require('./helpers/guardarArchivo2');
// const { inquireMenu2, pausa } = require('./helpers/inquirer2');
const { inquireMenu4,
        pausa,
        leerInput,
        listadoTareasBorrar,
        confirmar, 
        mostrarListadoChecklist
} = require('./helpers/inquirer4');

const Tareas5 = require('./models/tareas5');








const main = async()=>{
    // console.log('Hola Mundo');

    let opt = '';
    const tareas = new Tareas5();
    const tareasDB = leerDB();
    if (tareasDB ){
        tareas.cargarTareasFromArray(tareasDB);

        // establecer las tareas
        //TODO: cargar tareas
    }

    // await pausa();

    do {
        //Imprimir menú
        opt = await inquireMenu4();
        
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


            case '5' : // completado | pendiente
                const ids = await mostrarListadoChecklist(tareas.listadoArr);
                tareas.toggleCompletadas(ids);
                // console.log(ids);
            break;
                // console.log(tareas.listadoArr);

            case '6' : // Borrar tareas
                const id = await listadoTareasBorrar( tareas.listadoArr);
                if ( id !== 0){
                    const ok = await confirmar('¿Está seguro?');
                    if(ok){
                        tareas.borrarTarea(id);
                        console.log('Tarea Borrada');
                    } 
                }
                //TODO: preguntar si esta seguro
                // console.log({ok});
            break;


          
        
            
        }

        guardarDB2(tareas.listadoArr);
       

      
        
        await pausa();



        

    } while ( opt !== '0');
    // pausa();

}

main();
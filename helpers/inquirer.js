const inquirer = require('inquirer');
require('colors');
const preguntas =[
    {
        type: 'list',
        name: 'opción',
        message : '¿Qué desea hacer?',
        choices: ['1. Crear Lista', 'opt2' , 'opt3']
    }
];


const inquireMenu = async()=>{
    // console.clear();
    console.log('==================================='.green);
    console.log('   Seleccione una opción'.green);
    console.log('===================================\n'.green);

    const opt=  await inquirer.prompt(preguntas);
    return opt;

}

module.exports ={
    inquireMenu,
}
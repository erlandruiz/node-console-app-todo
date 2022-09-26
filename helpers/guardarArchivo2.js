const fs = require('fs');
const { arch } = require('os');
const archivo = './db/data.json';

const guardarDB2 = (data)=>{

    // const archivo = './db/data.txt';

    fs.writeFileSync(archivo, JSON.stringify(data));

}

const leerDB = ()=>{

  if (!fs.existsSync(archivo)){
    return null;
  }

  const info = fs.readFileSync(archivo, {encoding: 'utf-8'});
  const data = JSON.parse(info);

  // console.log(data);
  return data;

}

module.exports ={
    guardarDB2,
    leerDB
}
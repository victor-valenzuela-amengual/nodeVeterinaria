const fs = require('fs')
const {Registrar, Leer, CrearArchivo} = require("./operaciones.js");
const args = process.argv.slice(2);

CrearArchivo();
if(args[0] == "registrar")
{
    Registrar(args[1],args[2],args[3],args[4],args[5]);
    console.log("Cita resistrada");
}
    
else if(args[0] == "leer")
    Leer();
else if(args[0] == "crear")
    CrearArchivo();
else
    console.log("Comando '" + args[0]  + "' no encontrado");
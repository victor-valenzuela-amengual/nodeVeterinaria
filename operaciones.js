const fs = require('fs')

const CrearArchivo = () =>{    
    if(!fs.existsSync('citas.json')){                 
        fs.writeFileSync('citas.json','[]')        
    }
    
}
const Registrar = (nombre,edad,tipo,color, enfermedad) => {   
    let Citas = [];
    const data = fs.readFileSync('citas.json', 'utf8');
    Citas = JSON.parse(data);   
                
    Citas.push({Nombre: nombre,
                Edad: edad,
                Tipo: tipo,
                Color: color,
                Enfermedad: enfermedad },);
                    
    fs.writeFileSync('citas.json',JSON.stringify(Citas));
}

const Leer = ()=>{
    const citas = fs.readFileSync('citas.json', 'utf8')
    JSON.parse(citas).forEach(cita => {
    console.log(cita);
});        
}

module.exports = {Registrar,Leer,CrearArchivo}
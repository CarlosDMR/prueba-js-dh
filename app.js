/*
    FORMATO DE CADA TAREA
        - titulo: string
        - status: string (
           * terminada
           * pendiente
         )
*/
const fs = require('fs');
const listado = fs.readFileSync('./tareas.json', 'utf-8');
let lista = JSON.parse(listado);

exports.leerTareas = function () {
    const L = fs.readFileSync('./tareas.json', 'utf-8');
    return JSON.parse(L)
}

exports.agregarTarea = function (tarea) {
    /*
        Registra y guarda una nueva tarea.
    */
    lista.push(tarea)
    fs.writeFileSync('tareas.json', JSON.stringify(lista))
}

exports.filtrarTareasPorEstado = function (estado) {
    /*
        En esta función debes de leer las tareas y retornar las que tengan el estado que se
        manda en el parametro.
    */
    let ListStatus = []
    for(let i = 0; i < lista.length; i++){
        if(lista[i]['status'] == estado){
            ListStatus.push(lista[i]);
        }
    }
    return ListStatus;
}
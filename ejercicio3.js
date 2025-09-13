/* GESTIÓN DE TAREAS 
Mostrar las tareas que están pendientes (no completadas)
Crear un array solo con las descripciones de las tareas
Filtrar las tareas de alta prioridad que no están completadas
Encontrar la tarea que contiene "JavaScript" en su descripción*/

const tareas = [{ id: 1, descripcion: "Hacer ejercicio", completada: true, prioridad: "alta" },
{ id: 2, descripcion: "Estudiar JavaScript", completada: false, prioridad: "alta" },
{ id: 3, descripcion: "Comprar víveres", completada: false, prioridad: "media" },
{ id: 4, descripcion: "Llamar al médico", completada: true, prioridad: "baja" },
{ id: 5, descripcion: "Limpiar la casa", completada: false, prioridad: "media" }]

/*Mostrar las tareas que están pendientes (no completadas)*/

const tareasPendientes = tareas.filter(tareas => !tareas.completada);
console.log(tareasPendientes);

/*Crear un array solo con las descripciones de las tareas*/

const descripcionesTareas = tareas.map(tareas => tareas.descripcion);
console.log(descripcionesTareas);

/*Filtrar las tareas de alta prioridad que no están completadas*/

const tareasAltaPrioridadNoCompletadas = tareas.filter(tareas => tareas.prioridad ==="alta" && !tareas.completada);
console.log(tareasAltaPrioridadNoCompletadas);

/*Encontrar la tarea que contiene "JavaScript" en su descripción*/

const tareaConJavaScript = tareas.find(tareas => tareas.descripcion.includes("JavaScript"));
console.log(tareaConJavaScript);


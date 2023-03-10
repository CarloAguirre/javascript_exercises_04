
let tareas = [
    {
        id: new Date().getTime(),
        desc: "Optimizar codigo",
        fecha: new Date().toLocaleDateString(), 
        completa: false
    },
    {
        id: new Date().getTime() + 1,
        desc: "Realizar ejercicios de brazos",
        fecha: new Date().toLocaleDateString(), 
        completa: false
    },
    {
        id: new Date().getTime() + 2,
        desc: "Entregar aplicacion de React.js",
        fecha:new Date().toLocaleDateString(), 
        completa: false
    }
];

let tablaTareas = document.getElementById("listaTareas")

const creaTarea = ()=>{
    let btnCreaTareas = document.getElementById("btnCreaTareas");
    let nuevaTarea = document.getElementById("nuevaTarea");
    
    btnCreaTareas.addEventListener("click", ()=>{
        let idTarea = new Date().getTime();
        let date = new Date().toLocaleDateString();

        if(nuevaTarea.value){
            tareas.push({id:idTarea, desc:nuevaTarea.value, fecha:date, completa: false}); 
        }else{
            alert("Ingresa la descripción de tu Tarea.")
        }
        
        listarTareas();
        tareasCount();
    })
};

const listarTareas = ()=>{
    let html ='';
   document.getElementById("sinTareas").innerHTML = `<img src="./assets/imgs/calendar.png" alt="imagen de calendario" width="500px">`;

    for(let tarea of tareas){      
        if(tarea.completa === false){
            html += `<tr>
                        <td>${tarea.id}</td>
                        <td>${tarea.desc}</td>
                        <td>${tarea.fecha}</td>
                        <td>Pendiente <span><button class="btn btn-success" onclick="completarTarea(${tarea.id})">Completar</button></span><button class="btn btn-danger ms-2" onclick="borrarTarea(${tarea.id})">Borrar Tarea</button></span></td>                     
                    </tr>`
        }else{
            html += `<tr>
                        <td>${tarea.id}</td>
                        <td>${tarea.desc}</td>
                        <td>${tarea.fecha}</td>
                        <td>Completada </span><button class="btn btn-danger ms-2" onclick="borrarTarea(${tarea.id})">Borrar Tarea</button></span></td>                     
                    </tr>`
        };

    };

    tablaTareas.innerHTML = html;
    
    if(tareas.length != 0){
        document.getElementById("sinTareas").innerHTML = ""
    }
};

const completarTarea = (tareaId)=>{
    let tarea = tareas.find(tarea=>tarea.id === tareaId);
    tarea.completa = true;
    listarTareas();
    tareasCount();
};

const borrarTarea = (tareaId)=>{
    let index = tareas.findIndex(tarea=>tarea.id === tareaId)
    tareas.splice(index, 1)
    listarTareas();
    tareasCount();
};

const tareasCount =()=>{
    let totalTareasHTML = document.getElementById("totalTareas")
    let tareasCompletadasHTML = document.getElementById("tareasCompletadas")

    let totalTareas = tareas.length;
    let tareasCompletadas = 0;
    tareas.find(tarea=>{
        if(tarea.completa === true){
            tareasCompletadas ++
        }
    });

    totalTareasHTML.innerHTML = totalTareas;
    tareasCompletadasHTML.innerHTML = tareasCompletadas;
};

creaTarea();
tareasCount();
listarTareas();



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

   let tareaRowTemplate =(tarea, estado, btnCompletarTarea="")=>{
    return  `<tr>
                <td>${tarea.id}</td>
                <td>${tarea.desc}</td>
                <td>${tarea.fecha}</td>
                <td>${estado}${btnCompletarTarea}<span><button class="btn btn-danger ms-2" onclick="borrarTarea(${tarea.id})">Borrar Tarea</button></span></td>                   
            </tr>`;
   }

   for(let tarea of tareas){      
        let btnCompletarTarea = `<span><button class="btn btn-success ms-3" onclick="completarTarea(${tarea.id})">Completar</button>`
        if(tarea.completa === false){
            let estado = "Pendiente" 
            html += tareaRowTemplate(tarea, estado, btnCompletarTarea)
        }else{
            let estado = "Completada"
            html += tareaRowTemplate(tarea, estado)
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


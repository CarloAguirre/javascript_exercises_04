
let tareas = [];
let tablaTareas = document.getElementById("listaTareas")

const creaTarea = ()=>{
    let btnCreaTareas = document.getElementById("btnCreaTareas");
    let nuevaTarea = document.getElementById("nuevaTarea")
    
    btnCreaTareas.addEventListener("click", ()=>{
        let idTarea = new Date().getTime();
        let date = new Date()

        tareas.push({id:idTarea, desc:nuevaTarea.value, fecha:date, estado: false}); 
        
        listarTareas();
        tareasCount();
    })
}

creaTarea();

const listarTareas = ()=>{
    let html ='';
    for(let tarea of tareas){
        
        if(tarea.estado === false){
            html += `<tr>
                        <td>${tarea.id}</td>
                        <td>${tarea.desc}</td>
                        <td>${tarea.fecha}</td>
                        <td>Pendiente <span><button class="btn btn-primary" onclick="completarTarea(${tarea.id})">Completar</button></span><button class="btn btn-danger ms-2" onclick="borrarTarea(${tarea.id})">Borrar Tarea</button></span></td>                     
                    </tr>`

   
        }else{
            html += `<tr>
                        <td>${tarea.id}</td>
                        <td>${tarea.desc}</td>
                        <td>${tarea.fecha}</td>
                        <td>Completada </span><button class="btn btn-danger ms-2" onclick="borrarTarea(${tarea.id})">Borrar Tarea</button></span></td>                     
                    </tr>`
        }

    }
    
    tablaTareas.innerHTML = `
    <div class="container mt-4 shadow-lg p3 mb-5 bg-body rounded">
      <table class="table table-bordered table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>DESCRIPCION</th>
            <th>FECHA DE CREACIÓN</th>
            <th>ESTADO</th>
          </tr>
          <tbody>
            ${html}  
          </tbody>
        </thead>
      </table>
    </div>`;

}

const completarTarea = (tareaId)=>{
    let tarea = tareas.find(tarea=>tarea.id === tareaId)
    tarea.estado = true;
    listarTareas()
    tareasCount()
}

const borrarTarea = (tareaId)=>{
    let index = tareas.findIndex(tarea=>tarea.id === tareaId)
    tareas.splice(index, 1)
    listarTareas()
    tareasCount()
}

const tareasCount =()=>{
    let totalTareasHTML = document.getElementById("totalTareas")
    let tareasCompletadasHTML = document.getElementById("tareasCompletadas")

    let totalTareas = tareas.length;
    let tareasCompletadas = 0
    tareas.find(tarea=>{
        if(tarea.estado === true){
            tareasCompletadas ++
        }
    })

    totalTareasHTML.innerHTML = totalTareas;
    tareasCompletadasHTML.innerHTML = tareasCompletadas;
}
tareasCount();


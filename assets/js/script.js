
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
                        <td>Pendiente <span><button class="btn btn-primary mb-3" onclick="completarTarea(${tarea.id})">Completar</button></span></td>                     
                    </tr>`

   
        }else{
            html += `<tr>
                        <td>${tarea.id}</td>
                        <td>${tarea.desc}</td>
                        <td>${tarea.fecha}</td>
                        <td>Completada</td>                     
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
}



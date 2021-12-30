const { taskOne, taskTwo } = require("../sequential/tasks");
async function main() {
    try{
        
       console.time("tiempo");
      //  !LO QUE HACE PROMISE.ALL ES RETORNAR UNA PROMESA DE LOS METODOS TASKONE() Y TASKTWO EN UN ARRAY
      // !ESTO HACE QUE LA EJECUCION DEJE DE SER SECUENCIAL Y SEA PARALELA ES DECIR QUE NO ESPERA A QUE TERMINE UNA PARA EJECUTAR LA OTRA, SINO QUE EJECUTA LAS 2 A LA VEZ, ESTO LO PODEMOS GUARDAR EN UNA VAR Y DESPUES MOSTRARLO EN PANTALLA
       const results = await Promise.all([taskOne(),taskTwo()])
      
        console.timeEnd("tiempo");
        console.log("task One returned", results[0]);
        console.log("task Two returned", results[1]);

      }
    catch(e){
        console.log(e);
    }
    }
main()
const { taskOne, taskTwo } = require("./tasks");
async function main() {
    try{
        
       console.time("tiempo");
        const valueOne = await taskOne();
        const valueTwo = await taskTwo();
        console.timeEnd("tiempo");
        console.log("task One returned", valueOne);
        console.log("task Two returned", valueTwo);

      }
    catch(e){
        console.log(e);
    }
    }
main()
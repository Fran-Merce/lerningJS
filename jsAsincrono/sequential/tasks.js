const util = require('util')

const sleep=util.promisify(setTimeout)

setTimeout(()=>{

})

module.exports={
    async taskOne(){
        try{
            throw new Error("some problem")
            await sleep(4000);
            return 'ONE VALUE'
        }
        catch(e){
            console.log(e);
        }
    },

    async taskTwo(){
        try{
            // throw new Error("some problem2")
            await sleep(2000);
            return 'TWO VALUE'
        }
        catch(e){
            console.log(e);
        }
    }
}
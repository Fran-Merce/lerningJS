//! req hace referencia a la info del usuario y res a la info que le envia en server a los navegadores

function resquestHandler(req,res){
    User.findById(req.userId,function(err,user){
        if(err){
            res.send(err)
        }else{
            tasks.findById(user.taskId, function(err,tasks){
                if(err){
                    return res.send(err)
                }else{
                    tasks.completed=true;
                    tasks.save(function(err) {
                        if(err){
                            return res.send(err)
                        }else{
                            res.send('Task Completed')
                        }
                    } )
                }
            })
        }
    })

}
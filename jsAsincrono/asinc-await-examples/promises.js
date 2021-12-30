function resquestHandler(req, res) {
  user
    .findById(req.userId)
    .then((user) => Tasks.findById(user.tasksId))
    .then((tasks) => {
      tasks.completed = true;
      tasks.save();
    })
    .then(() => {
      res.send("tasks completed");
    })
    .catch(function (err) {
      res.send(err);
    });
}

async function resquestHandler(req, res) {

  try {
    const user = await User.findById(req.userId);
    const tasks = await Tasks.findById(user.TasksId);
    tasks.completed = true;
    await tasks.save();
    res.send("Tasks completed");

  } catch (e) {
    res.send(e);
  }
}


const Task = require('../schemas/taskSchema');
const User = require('../schemas/userSchema');

exports.createTask = async (req, res) => {
  try {
    // Create the task
    const newTask = await Task.create({
      // await Task.create({
      title: req.body.title,
      description: req.body.description,
    });

    //Find and update the user
    const updatedUser = await User.findOneAndUpdate(
      {
        _id: req.body.id,
      },
      {
        $push: { tasks: newTask._id },
      },
      res.json({
        status: 'success',
        message: 'Task added successfully',
        newTask,
      })
    );
  } catch (err) {
    return res.status(500).send(err);
  }
};

exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json({
      status: 'success',
      message: 'Tasks retrieved successfully',
      tasks,
    });
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: `Duplicate username: ${req.body.username}`,
    });
  }
};

exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    if (task) {
      res.json({
        status: 'success',
        message: 'Task retrieved successfully',
        task,
      });
    } else {
      res.status(500).json({
        status: 'fail',
        message: 'Task not found',
      });
    }
  } catch (err) {
    res.status(400).json({
      status: 'fail',
      message: 'Task not found',
    });
  }
};

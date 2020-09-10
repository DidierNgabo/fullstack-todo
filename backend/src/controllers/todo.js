import Todo from '../models/todo';

exports.createTodo = (req, res) => {
  const todo = new Todo({
    text: req.body.text,
    completed: false,
  });
  todo
    .save()
    .then(() => {
      res.status(201).json({
        message: 'Todo saved successfully',
      });
    })
    .catch((error) => {
      res.status(400).json({
        error,
      });
    });
};

exports.updateTodo = (req, res) => {
  const todo = new Todo({
    _id: req.params.id,
    text: req.body.text,
    completed: true,
  });
  Todo.updateOne({ _id: req.params.id }, todo)
    .then(() => {
      res.status(201).json({ message: 'Todo updated successfully!' });
    })
    .catch((err) => res.status(400).json({ err }));
};

exports.deleteTodo = (req, res) => {
  Todo.deleteOne({ _id: req.params.id })
    .then(() => {
      res.status(200).json({ message: 'Todo deleted successfully' });
    })
    .catch((err) => res.status(400).json({ err }));
};

exports.getAllTodos = (req, res) => {
  Todo.find()
    .then((things) => {
      res.status(200).json(things);
    })
    .catch((err) => res.status(400).json({ err }));
};

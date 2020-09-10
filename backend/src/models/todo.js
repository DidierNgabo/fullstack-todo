import mongoose from 'mongoose';

const todoShcema = mongoose.Schema({
  text: { type: String, required: true },
  completed: { type: Boolean, required: true },
});

const Todo = mongoose.model('Todo', todoShcema);

export default Todo;

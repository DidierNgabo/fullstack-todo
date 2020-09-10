import express from 'express';

import todoCtrl from '../controllers/todo';

const router = express.Router();

router.post('/', todoCtrl.createTodo);
router.put('/:id', todoCtrl.updateTodo);
router.delete('/:id', todoCtrl.deleteTodo);
router.get('/', todoCtrl.getAllTodos);

export default router;

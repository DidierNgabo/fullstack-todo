import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import todosRoutes from './src/routes/routes';

const port = process.env.Port || 4000;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/todos', todosRoutes);

mongoose
  .connect('mongodb://localhost:27017/fullTodos')
  .then(() => console.log('successfully connected to monog db'))
  .catch((err) => console.log(err));

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});

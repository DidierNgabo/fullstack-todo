import React from 'react';
import axios from 'axios';

const Form = ({
  setInputText,
  inputText,
  todos,
  setTodos,
  status,
  setStatus,
}) => {
  const inputHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 1000),
      },
    ]);
    setInputText('');
  };
  const statusHandler = (e) => {
    console.log(e.target.value);
    setStatus(e.target.value);
  };
  return (
    <div>
      <form>
        <input
          type="text"
          value={inputText}
          onChange={inputHandler}
          className="todo-input"
        />
        <button
          className="todo-button"
          onClick={submitTodoHandler}
          type="submit"
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
          <select name="todos" onChange={statusHandler} className="filter-todo">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="uncompleted">Uncompleted</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Form;

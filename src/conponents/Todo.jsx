import React from 'react';

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className='Todo'>
      <p 
        onClick={() => toggleComplete(task.id)} 
        className={`${task.completed ? 'completed' : ''}`}
      >
        {task.task}
      </p>
      <div>
        <i 
          className="fa fa-pencil-square-o" 
          aria-hidden="true" 
          id='pencil' 
          onClick={() => editTodo(task.id)}
        ></i>
        <i 
          className="fa fa-trash-o" 
          aria-hidden="true" 
          id='trash' 
          onClick={() => deleteTodo(task.id)}
        ></i>
      </div>
    </div>
  );
};

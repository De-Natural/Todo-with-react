import React, { useState } from 'react';
import { TodoForm } from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { Todo } from './Todo';
import { EditTodoForm } from './EditTodoForm';

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  // Correct the deleteTodo function
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo));
  };

  const editTask = (updatedTask, id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, task: updatedTask, isEditing: false } : todo));
  };

  return (
    <div className='TodoWrapper'>
      <h1>Arrange Things Accordingly</h1>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) => (
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo 
            key={todo.id} 
            task={todo} 
            toggleComplete={toggleComplete} 
            deleteTodo={deleteTodo} 
            editTodo={editTodo} 
          />
        )
      ))}
    </div>
  );
};

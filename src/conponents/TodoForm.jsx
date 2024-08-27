import React, {useState} from 'react'

export const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (value.trim() !== "") {
      addTodo(value.trim());
      setValue("");
    }
  };

  const handleChange = e => {
    const newValue = e.target.value;
    if (newValue === " " || newValue.trim() === "") {
      // Prevent state update if the input is only a space
      return;
    }
    setValue(newValue);
  };
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type='text' className='todo-input' value = {value}  placeholder = 'Add your task here'
        onChange={(e) => setValue(e.target.value)
        }/>
        <button type='submit' className='todo-btn'>Add</button>
    </form>
  )
}

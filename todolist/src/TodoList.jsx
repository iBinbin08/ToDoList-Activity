import React, { useState } from 'react';
import './App.css'


function TodoList() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [doneTodo, setDoneTodo] = useState([]);
  const handleDoneTodo = (event) => {
    console.log(doneTodo);
    setDoneTodo(prevArray => {
      const newArray = [...prevArray];
      newArray[event.target.value] = newArray[event.target.value] ? false : true;
      return newArray;
    });
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (!inputValue.trim()) {
      return;
    }
    setTodos([...todos, inputValue]);
    setDoneTodo([...doneTodo, false]);
    setInputValue('');
  };

  const handleTodoDelete = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li className={doneTodo[index] ? "strike" : ""}  key={index}>
            <input type="checkbox"  onClick={handleDoneTodo} value={index} />
            {todo}{' '}
  
            <button onClick={() => handleTodoDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
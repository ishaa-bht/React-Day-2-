import React, { useState } from 'react';

const TodoApp = () => {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addTodo = () => {
    if (inputValue.trim() !== '') {
      const newTodos = todos.slice();
      newTodos.splice(newTodos.length, 0, { text: inputValue, checked: false });
      setTodos(newTodos);
      setInputValue('');
    }
  };

  const deleteTodo = (index) => {
    const newTodos = todos.slice(); 
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const toggleChecked = (index) => {
    const newTodos = todos.slice();
    newTodos[index] = { ...newTodos[index], checked: !newTodos[index].checked };
    setTodos(newTodos);
  };

  return (
    <div>
      <h1>TO-DO App</h1>
      <div>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter action item"
        />
        <button onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={() => toggleChecked(index)}
            />
            <span style={{ textDecoration: todo.checked ? 'line-through' : 'none' }}>
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoApp;

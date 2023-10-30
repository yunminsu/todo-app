import './App.css';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import TodoList from './components/TodoList';
import { useRef, useState } from 'react';
import { v4 as uuidv4 } from "uuid";
import TodoHeader from './components/TodoHeader';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    background: black;
  }
`;

function App() {
  const [todos, setTodos] = useState([]);
  const [moveTodos, setMoveTodos] = useState([]);

  const nextId = useRef(1);

  const handleAdd = (value) => {
    console.log(value);
    const todo = {
      id: uuidv4(),
      value
    }

    setTodos(todos.concat(todo));

    nextId.current += 1;
  }

  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleUpdate = (value) => {
    const { id, updateText, updateTitle } = value;
    const copyTodos = [...todos]
    const targetIndex = todos.findIndex(todo => todo.id === id);
    copyTodos[targetIndex].value.title = updateTitle;
    copyTodos[targetIndex].value.text = updateText;
    setTodos(copyTodos);
  }

  return (
    <>
      <GlobalStyle />
      <TodoHeader onAdd={handleAdd} >
        <TodoList todos={todos} setTodos={setTodos} moveTodos={moveTodos} onUpdate={handleUpdate} onRemove={handleRemove} />  
      </TodoHeader>
    </>
  );
}

export default App;

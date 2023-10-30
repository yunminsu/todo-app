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

  const nextId = useRef(1);

  const handleAdd = (value) => {
    const todo = {
      id: uuidv4(),
      ㅈvalue,
    }

    setTodos(todos.concat(todo));

    nextId.current += 1;
  }

  return (
    <>
      <GlobalStyle />
      <TodoHeader onAdd={handleAdd} >
        <TodoList todos={todos} />  
      </TodoHeader>
    </>
  );
}

export default App;

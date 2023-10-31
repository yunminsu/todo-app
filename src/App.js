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
    const todo = {
      id: uuidv4(),
      value
    }

    setTodos(todos.concat(todo));

    nextId.current += 1;
  }
  
  // 즐겨찾기(이동) 기능
  const handleMove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setMoveTodos(moveTodos.concat(todos.filter(todo => todo.id === id)));
  }

  // 즐겨찾기 해제 기능
  const handleUnMove = (id) => {
    setMoveTodos(moveTodos.filter(todo => todo.id !== id));
    setTodos(todos.concat(moveTodos.filter(todo => todo.id === id)));
  }

  // 삭제 기능
  const handleRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
    setMoveTodos(moveTodos.filter(todo => todo.id !== id));
  };

  // 수정 기능
  const handleUpdate = (value) => {
    const { id, updateText, updateTitle, updateDate } = value;
    const copyTodos = [...todos]
    const targetIndex = todos.findIndex(todo => todo.id === id);
    console.log(targetIndex);
    copyTodos[targetIndex].value.title = updateTitle;
    copyTodos[targetIndex].value.text = updateText;
    copyTodos[targetIndex].value.date = updateDate;
    setTodos(copyTodos);
  }

  return (
    <>
      <GlobalStyle />
      <TodoHeader onAdd={handleAdd} >
        <TodoList todos={todos} setTodos={setTodos} moveTodos={moveTodos} onMove={handleMove} unMove={handleUnMove} onUpdate={handleUpdate} onRemove={handleRemove} />  
      </TodoHeader>
    </>
  );
}

export default App;

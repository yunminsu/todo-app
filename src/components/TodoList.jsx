import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';
import TodoMove from './TodoMove';

const TodoListWrapper = styled.div`
  min-height: 600px;
  max-height: 760px;
  overflow-y: auto;
  background: white;
`;

const TodoListContainer = styled.div`
  display: flex;
  overflow-x: auto;
`;

const TodoMoveTitle = styled.div`
  width: 100%;
  height: 20px;
  margin-top: 5px;
  font-size: 14px;
  font-weight: bold;
  background: yellow;
`;

function TodoList(props) {
  const { todos, setTodos, moveTodos, onMove, unMove, onUpdate, onRemove } = props

  return (
    <TodoListWrapper>
      <TodoListContainer>
        {moveTodos.map(moveTodo => <TodoMove key={moveTodo.id} moveTodo={moveTodo} unMove={unMove} onUpdate={onUpdate} onRemove={onRemove} />)}
      </TodoListContainer>
      <br /><br />
      {todos.map(todo => <TodoListItem key={todo.id} todo={todo} setTodos={setTodos} moveTodos={moveTodos} onMove={onMove} onUpdate={onUpdate} onRemove={onRemove} /> )}
    </TodoListWrapper>
  );
}

export default TodoList;
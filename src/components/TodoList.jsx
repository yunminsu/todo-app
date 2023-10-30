import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 600px;
  max-height: 760px;
  overflow-y: auto;
  background: white;
`;

function TodoList(props) {
  const { todos, setTodos, moveTodos, onUpdate, onRemove } = props

  return (
    <TodoListWrapper>
      {todos.map(todo => <TodoListItem key={todo.id} todo={todo} setTodos={setTodos} moveTodos={moveTodos} onUpdate={onUpdate} onRemove={onRemove} /> )}
    </TodoListWrapper>
  );
}

export default TodoList;
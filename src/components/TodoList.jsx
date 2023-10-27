import React from 'react';
import styled from 'styled-components';
import TodoListItem from './TodoListItem';

const TodoListWrapper = styled.div`
  min-height: 512px;
  max-height: 760px;
  overflow-y: auto;
  background: white;
`;

function TodoList(props) {
  console.log(props);
  const { todos } = props;

  return (
    <TodoListWrapper>
      {todos.map(todo => <TodoListItem key={todo.id} todo={todo} />)}
      
    </TodoListWrapper>
  );
}

export default TodoList;
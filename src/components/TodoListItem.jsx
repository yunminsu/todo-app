import React from 'react';
import styled from 'styled-components';
import { MdStarOutline } from 'react-icons/md';

const TodoListItemWrapper = styled.div`
  width: calc(30%);
  margin: 10px 0 0 18px;
  height: 200px;
  display: inline-block;
  background: #f3f781;
  word-break: break-all;
  overflow-y: auto;

  p {
    padding: 10px;
  }
  `;

  const TodoListItemContainer = styled.div`
    height: 24px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
  
  .todolistitem-title {
    font-weight: bold;
    line-height: 24px;
    flex: 1;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;

    &:hover {
      overflow: visible;
    }
  }
  
  .todolistitem-important-btn {
    font-size: 16px;
    padding: 3px;
    background: none;
    border: none;
    cursor: pointer;
    align-items: center;
  } 
  `;

function TodoListItem(props) {
  console.log(props);
  const { todo: { id, value: { title, text } } } = props;

  return (
    <TodoListItemWrapper>
      <TodoListItemContainer>
        <h3 className='todolistitem-title'>{title}</h3>
        <button className='todolistitem-important-btn'><MdStarOutline /></button>
      </TodoListItemContainer>
        <p>{text}</p>
        
    </TodoListItemWrapper>
  );
}

export default TodoListItem;
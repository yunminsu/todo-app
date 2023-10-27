import React from 'react';
import styled from 'styled-components';
import Button from './ui/Button';
import { MdStarOutline } from 'react-icons/md';

const TodoListItemWrapper = styled.div`
  width: calc(30%);
  margin: 10px;
  height: 200px;
  display: inline-block;
  background: #f3f781;
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
  const { todo: { id, text } } = props;

  return (
    <TodoListItemWrapper>
      <TodoListItemContainer>
        <h3 className='todolistitem-title'>{text}</h3>
        <button className='todolistitem-important-btn'><MdStarOutline /></button>
      </TodoListItemContainer>
        
    </TodoListItemWrapper>
  );
}

export default TodoListItem;
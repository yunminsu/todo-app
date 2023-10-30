import React, { useState } from 'react';
import styled from 'styled-components';
import { MdDelete, MdEditDocument, MdStarOutline } from 'react-icons/md';
import TodoAdd from './TodoAdd';
import TodoHeader from './TodoHeader';
import TodoUpdate from './TodoUpdate';

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
    margin-left: 5px;
  } 
  `;

function TodoListItem(props) {
  const [isUpdate, setIsUpdate] = useState(false);

  const { todo: { id, value: { title, text, date } }, setTodos, moveTodos, onUpdate, onRemove } = props;

  const handleUpdateClick = () => {
    setIsUpdate(!isUpdate);
  };

  const today = new Date();
  const nowYear = today.getFullYear();
  const nowMonth = today.getMonth() + 1;
  const nowDate = today.getDate();
  console.log(Number(date));
  const diff = Number(date.getTime()) - today.getTime();
  console.log(Number(date.getTime()));
  const result = Math.ceil(diff / (1000 * 60 * 60 * 24))
  console.log(result);

  return (
    <TodoListItemWrapper>
      <TodoListItemContainer>
        <h3 className='todolistitem-title'>{title}({date})</h3>
        <button className='todolistitem-important-btn' ><MdStarOutline /></button>
        <button className='todolistitem-important-btn' onClick={handleUpdateClick}>
            <MdEditDocument />
        </button>
            {isUpdate && <TodoUpdate id={id} title={title} text={text} onUpdate={onUpdate}/>}
        <button className='todolistitem-important-btn' onClick={() => onRemove(id)}><MdDelete /></button>
      </TodoListItemContainer>
        <p>{text}</p>
        
    </TodoListItemWrapper>
  );
}

export default TodoListItem;
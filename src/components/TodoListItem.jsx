import React, { useState } from 'react';
import styled from 'styled-components';
import { MdDelete, MdEditDocument, MdStarOutline } from 'react-icons/md';
import TodoAdd from './TodoAdd';
import TodoHeader from './TodoHeader';
import TodoUpdate from './TodoUpdate';
import TodoMove from './TodoMove';

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

  const { todo: { id, value: { title, text, date } }, onMove, onUpdate, onRemove } = props;

  const handleUpdateClick = () => {
    setIsUpdate(!isUpdate);
  };

  const dDate = new Date(date);

  const today = new Date();

  const diffDate = dDate.getTime() - today.getTime();
  const dDay = Math.ceil(diffDate / (1000 * 60 * 60 * 24));

  return (
    <>
    <TodoListItemWrapper>
      <TodoListItemContainer>
        <h3 className='todolistitem-title'>{title}{date ? `(D-${dDay})` : ''}</h3>
        <button className='todolistitem-important-btn' onClick={() => onMove(id)}><MdStarOutline /></button>
        <button className='todolistitem-important-btn' onClick={handleUpdateClick}>
            <MdEditDocument />
        </button>
            {isUpdate && <TodoUpdate id={id} title={title} text={text} date={date} onUpdate={onUpdate}/>}
        <button className='todolistitem-important-btn' onClick={() => onRemove(id)}><MdDelete /></button>
      </TodoListItemContainer>
        <p>{text}</p>
    </TodoListItemWrapper>
  </>
  );
}

export default TodoListItem;
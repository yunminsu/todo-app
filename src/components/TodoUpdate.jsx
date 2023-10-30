import React, { useState } from 'react';
import styled from 'styled-components';

const TodoAddContainer = styled.div`
  width: 500px;
  margin: 0 auto;
  position: absolute;
  top: 200px;
  left: 0;
  right: 0;
  z-index: 99;

  .addclose-btn {
    position: absolute;
    right: 0;
    top: -30px;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: white;
  outline: none;
  border: 1px solid black;
  padding: 16px;
  font-size: 22px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 16px;
  outline: none;
  box-sizing: border-box;
  resize: none;
  font-size: 16px;
`;

function TodoUpdate(props) {
  const { id, title, text, onUpdate} = props;

  const [isClose, setIsClose] = useState(true);
  const [updateValues, setUpdateValues] = useState({
    id: id,
    updateTitle: title,
    updateText: text
  });
  const [date, setDate] = useState(0);

  const { updateTitle, updateText } = updateValues; 

  const handleUpdate = (e) => {
    const { name, value } = e.target

    setUpdateValues((updateValues) => ({
      ...updateValues,
      [name]: value,
    }));
  }

  const handleCloseClick = () => {
    setIsClose(false)
  };

  const handleUpdateSubmit = () => {
    onUpdate(updateValues);
    setIsClose(false);
  }

  return (
    <>
    { isClose &&
      <TodoAddContainer>
        <button className='addclose-btn' onClick={handleCloseClick}>닫기</button>
        <StyledInput 
          type='text'
          name='updateTitle'
          value={updateTitle}
          onChange={handleUpdate}
        />
        <StyledTextarea 
          cols={30} 
          rows={20} 
          name='updateText'
          value={updateText}
          onChange={handleUpdate}
        />
        <div>
          마감일
          <input type="date" value={date} />
        </div>
        <button type='submit' onClick={handleUpdateSubmit}>수정하기</button>
      </TodoAddContainer>
   }
   </>
  );
}

export default TodoUpdate;
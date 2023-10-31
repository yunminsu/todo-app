import React, { useState } from 'react';
import { MdOutlineCancel } from 'react-icons/md';
import styled from 'styled-components';

const TodoAddContainer = styled.div`
  width: 300px;
  margin: 0 auto;
  position: absolute;
  border: 1px solid #ccc;
  top: 200px;
  left: 0;
  right: 0;
  z-index: 99;

  .add-title {
    position: absolute;
    font-size: 20px;
    color: #424242;
    left: 0;
    top: -30px;
  }

  .addclose-btn {
    position: absolute;
    right: -4px;
    top: -26px;
    font-size: 16px;
    background: none;
    border: none;
    cursor: pointer;
  }

  .add-btn {
    position: absolute;
    border: none;
    background: #D8CEF6;
    font-weight: bold;
    padding: 3px;
    bottom: -30px;
    left: 0;
    right: 0;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  box-sizing: border-box;
  background: white;
  outline: none;
  border: none;
  border-bottom: 1px solid #ccc;
  padding: 16px;
  font-size: 18px;
`;

const StyledTextarea = styled.textarea`
  width: 100%;
  padding: 16px;
  outline: none;
  border: none;
  box-sizing: border-box;
  resize: none;
  font-size: 14px;
`;

const StyledDate = styled.div`
  border-top: 1px solid #ccc;
  padding: 10px;
  font-size: 14px;
  color: black;

  input {
    margin-left: 10px;
  }
`;

function TodoAdd(props) {
  const [isClose, setIsClose] = useState(true);
  const [values, setValues] = useState({
    title: '',
    text: '',
    date: 0
  });

  const { title, text, date } = values; 

  const handle = (e) => {
    const { name, value } = e.target

    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  const { onAdd } = props;

  const handleCloseClick = () => {
    setIsClose(false)
  };

  const handleSubmit = () => {
    onAdd(values);
    setIsClose(false)
  }

  return (
    <>
    { isClose &&
      <TodoAddContainer>
        <div className='add-title'>
          Todo Add
        </div>
          <button className='addclose-btn' onClick={handleCloseClick}><MdOutlineCancel /></button>
        <StyledInput 
          type='text'
          name='title'
          placeholder='제목'
          value={title}
          onChange={handle}
        />
        <StyledTextarea 
          cols={30} 
          rows={10} 
          value={text}
          name='text'
          onChange={handle}
        />
        <StyledDate>
          마감일
          <input type="date" name='date' value={date} onChange={handle} />
        </StyledDate>
        <button className='add-btn' type='submit' onClick={handleSubmit} disabled={title === '' ? true : false}>등록</button>
      </TodoAddContainer>
   }
   </>
  );
}

export default TodoAdd;
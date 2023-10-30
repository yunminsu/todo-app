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

function TodoAdd(props) {
  const [isClose, setIsClose] = useState(true);
  const [values, setValues] = useState({
    title: '',
    text: ''
  })

  const { title, text } = values; 

  const handle = (e) => {
    const { name, value } = e.target

    console.log(name);
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  }

  const { onAdd } = props;

  const handleCloseClick = () => {
    setIsClose(false)
  };

  const handleSubmit = (e) => {
    onAdd(values);
    setIsClose(false)
  }

  return (
    <>
    { isClose &&
      <TodoAddContainer>
        <button className='addclose-btn' onClick={handleCloseClick}>닫기</button>
        <StyledInput 
          type='text'
          name='title'
          placeholder='제목'
          value={title}
          onChange={handle}
        />
        <StyledTextarea 
          cols={30} 
          rows={20} 
          value={text}
          name='text'
          onChange={handle}
        />
        <div>중요도</div> 
        <div>마감일</div>
        <button type='submit' onClick={handleSubmit}>추가하기</button>
      </TodoAddContainer>
   }
   </>
  );
}

export default TodoAdd;
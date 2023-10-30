import React, { useState } from 'react';
import styled from 'styled-components';
import { MdAdd, MdDateRange } from 'react-icons/md'
import TodoList from './TodoList';

const TodoInserContainer = styled.div`
  max-width: 300px;
  margin: 0 auto;
  position: relative;
  top: 100px;
  z-index: 99;
`;

const TodoInserWrapper = styled.form`
  background: white;
  border-bottom: 1px solid black;
  flex: 1;
`;

const StyledInput = styled.input`
  background: none;
  outline: none;
  border: none;
  padding: 16px;
  font-size: 22px;
  flex: 1;
`;

function TodoInsert(props) {
  const { onInsert } = props;
  const [value, setValue] = useState('');
  const [isDisabled, setIsDisabled] = useState(false);

  const handleValueChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onInsert(value);
    setValue('');
  }

  return (
    <TodoInserContainer>
      <TodoInserWrapper onSubmit={handleSubmit} >
        <StyledInput 
          type='text'
          placeholder='제목'
          value={value}
          onChange={handleValueChange}
        />
        <textarea>{<MdAdd />}</textarea>
      </TodoInserWrapper>
    </TodoInserContainer>
  );
}

export default TodoInsert;
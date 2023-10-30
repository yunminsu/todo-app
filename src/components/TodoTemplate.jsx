import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import { MdDateRange, MdOutlineModeEdit } from 'react-icons/md';
import TodoList from './TodoList';

const TodoTemplateWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  margin-top: 6rem;
  overflow: hidden;
  `;

const AppContainer = styled.div`
  background: #D8CEF6;
  color: white;
  height: 100px;
  display: flex;
  position: relative;
  `;

const AppTitle = styled.div`
  font-weight: bold;
  font-size: 28px;
  margin: 0 auto;
  align-self: center;
  text-shadow: 1px 0px black;
  `;

const AppButton = styled.div`
  display: flex;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const StyledButton = styled.button`
  background: #D8CEF6;
  border: none;
  padding: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 5px;
`;

function TodoTemplate(props) {
  const [isTodoInsert, setIsTodoInsert] = useState(false);

  const handleWriteClick = () => {
    setIsTodoInsert(true)
  }

  const handleWrite = () => {
    setIsTodoInsert(prev => !prev);
  }

  return (
    <TodoTemplateWrapper>
      <AppContainer>
        <AppTitle>
          My Todo List
        </AppTitle>
        <AppButton>
          <StyledButton onClick={handleWriteClick} >
            {<MdOutlineModeEdit />}
            {isTodoInsert && <TodoInsert />}
          </StyledButton>
          <StyledButton >
            {<MdDateRange />}
          </StyledButton>
        </AppButton>
      </AppContainer>
      {props.children}
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;
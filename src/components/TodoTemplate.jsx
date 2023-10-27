import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInsert from './TodoInsert';
import Button from './ui/Button';
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



function TodoTemplate(props) {
  const [isTodoInsert, setIsTodoInsert] = useState(false);

  const handleWriteClick = () => {
    setIsTodoInsert(!isTodoInsert)
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
          <Button title={<MdOutlineModeEdit />} onClick={handleWriteClick} >
          {isTodoInsert && <TodoInsert />}
          </Button>
          <Button title={<MdDateRange />}></Button>
        </AppButton>
      </AppContainer>
      {props.children}
    </TodoTemplateWrapper>
  );
}

export default TodoTemplate;
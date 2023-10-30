import React, { useState } from 'react';
import styled from 'styled-components';
import { MdDateRange, MdOutlineModeEdit } from 'react-icons/md';
import TodoAdd from './TodoAdd';

// TodoHeader 영역
const TodoHeaderWrapper = styled.div`
  max-width: 768px;
  margin: 0 auto;
  margin-top: 6rem;
  /* overflow: hidden; */
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

function TodoHeader(props) {
  const [isTodoInsert, setIsTodoInsert] = useState(false);

  const { onAdd } = props;

  const handleCreateClick = (e) => {
    setIsTodoInsert(!isTodoInsert);
  }

  return (
    <TodoHeaderWrapper>
      <AppContainer>
        <AppTitle>
          My Todo List
          {isTodoInsert && <TodoAdd onAdd={onAdd}/>}
        </AppTitle>
        <AppButton>
          <StyledButton onClick={handleCreateClick}>
            {<MdOutlineModeEdit />}
          </StyledButton>
          <StyledButton >
            {<MdDateRange />}
          </StyledButton>
        </AppButton>
      </AppContainer>
      {props.children}
    </TodoHeaderWrapper>
  );
}

export default TodoHeader;
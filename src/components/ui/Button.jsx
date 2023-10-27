import React from 'react';
import styled from 'styled-components';

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

function Button(props) {
  console.log(props);
  const { title, onClick } = props;

  return (
    <StyledButton onClick={onClick}>{title || 'Button'}</StyledButton>
  );
}

export default Button;
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  background-image: url(${process.env.PUBLIC_URL}/valentines-background.jpg);
  background-size: cover;
  background-position: center;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
  color: #c60055;
  text-align: center;
`;

const Message = styled.p`
  font-size: 24px;
  color: #9e004f;
  text-align: center;
`;

function App() {
  return (
    <Container>
      <Title>Happy Valentine's Day!</Title>
      <Message>Will you be my valentine?</Message>
    </Container>
  );
}

export default App;

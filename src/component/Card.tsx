import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string,
};

const Card: React.FC<IProps> = (props) => {
  return (
    <Container>
      <Title>
        {props.title}
      </Title>
    </Container>
  );
}

export default Card;

const Container = styled.div`
  display: inline-block;
  border: 1px solid #DDD;
  width: 160px;
  margin: 4px
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: lighter;
`;
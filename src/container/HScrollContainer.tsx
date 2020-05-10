import * as React from 'react';
import styled from 'styled-components';

// Propsの型定義
interface IProps {
  
}

const HScrollContainer: React.FC<IProps> = props => {

  return (
    <Container className='scrollbar-none'>
      {props.children}
    </Container>
  );
}

export default HScrollContainer;

const Container = styled.div`
  overflow: scroll;
  white-space: nowrap;
`;

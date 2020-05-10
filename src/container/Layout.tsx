import * as React from 'react';
import styled from 'styled-components';

// Propsの型定義
interface IProps {
  
}

const Layout: React.FC<IProps> = props => {

  return (
    <>
      <Navbar>
        <Logo>
          NeeedS
        </Logo>
      </Navbar>
      <Container>
        {props.children}
      </Container>
      <Footer>
        フッター
      </Footer>
    </>
  );
}

export default Layout;

const Navbar = styled.div`
  height: 30px;
  width: 100%;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #DDD;
`;

const Logo = styled.div`
  margin-left: 16px;
  font-size: 16px;
`;

const Container = styled.div`
    padding: 16px 0 0 0;
`;

const Footer = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #DDD;
`;
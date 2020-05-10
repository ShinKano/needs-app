import * as React from 'react';
import styled from 'styled-components';

interface IProps {
  title: string,
};

const SiteTitle: React.FC<IProps> = (props) => {
  return (
    <Container>
      <First>{props.title}</First>
      <Second>{props.title}</Second>
      <Third>{props.title}</Third>
    </Container>
  );
}

export default SiteTitle;

const Container = styled.div`
  position: relative;
  height: 60px;
`;

const First = styled.h1`
  position: absolute;
  top: -1px;
  left: 49.6%;
  color: navajowhite;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
const Second = styled.h1`
  position: absolute;
  top: 0px;
  left: 50%;
  color: palevioletred;
  mix-blend-mode: darken;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;
const Third = styled.h1`
  position: absolute;
  top: 1px;
  left: 50.4%;
  color: darkturquoise;
  mix-blend-mode: color-burn;
  transform: translate(-50%, -50%);
  -webkit-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
`;


import './App.css';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
`;

// extends vscode-styled-components 설치 시 css파일 처럼 자동완성/글자색상 등 지원
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) => 
    props.primary &&
    css`
      background: #009cd5;
      color: white;
    `
  }
`;

export default function StyledComponent() {
  return (
    <Container>
      <Button>Normal Button</Button>
      <Button primary="true">Primary Button</Button>
    </Container>
  );
}

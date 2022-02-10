import { Global, css } from "@emotion/react";
import styled from "@emotion/styled";

const globalStyle = css`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const Title = styled.h1`
  color: red;
`;

const Home = () => {
  return (
    <>
      <Global styles={globalStyle} />
      <Title>index</Title>
    </>
  );
};

export default Home;

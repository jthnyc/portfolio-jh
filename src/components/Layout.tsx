import Head from "next/head";
import styled from "styled-components";

// interface Components {
//   sections: {
//     navbar: { rendered: string };
//     body: { rendered: string };
//   };
// }

export default function Layout(props) {
  return (
    <>
      <Head>
        <title>Joanna Huang</title>
      </Head>
      <Main>{props.children}</Main>
    </>
  );
}

const Main = styled.main`
  display: flex;
  height: calc(100vh - 64px);
  background-color: lightblue;

  & > section {
    padding: 32px;
  }
`;

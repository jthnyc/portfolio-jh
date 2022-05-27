import styled from "styled-components";
import GlobalStyle from "../src/globalStyles";
import Head from "next/head";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/SideBar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import { device } from "../src/device";

export default function Index() {
  return (
    <div>
      <GlobalStyle />
      <Head>
        <title>Joanna Huang</title>
        <meta name="description" content="Portfolio Site for Joanna Huang" />
      </Head>
      <Navbar />
      <Sidebar />
      <Main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Main>
    </div>
  );
}

// Index.getLayout = function getLayout(page: Component) {
//   return (
//     <Layout>
//       <Navbar />
//       {page}
//     </Layout>
//   );
// };

const Main = styled.main`
  // height: calc(100vh - 4rem);
  background-color: #04386c;
  padding: 0 10rem;
  width: 100%;

  & > section {
    background-color: #04386c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
    width: 100%;
    color: #edf5e1;
    padding: 0rem;
    margin: 0 auto;

    &:not(last-child) {
      margin-bottom: 7.5rem;
    }
  }

  @media ${device.sm} {
    padding: 0;

    & > section {
      padding: 0 1.5rem;
    }
  }
`;

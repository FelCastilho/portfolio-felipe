import { Header } from "../../components/header";
import Hero from "../hero";
import About from '../about';
import Services from "../services";
import Projects from "../projects";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  );
}

export default Home;

import { Header } from "../../components/header";
import Hero from "../hero";
import About from '../about';
import Services from "../services";
import Projects from "../projects";
import { Technology } from "../technology";
import { Footer } from "../../components/footer";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Technology />
      <Footer /> 
    </>
  );
}

export default Home;

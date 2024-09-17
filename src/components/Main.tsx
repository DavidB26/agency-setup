import About from "./About";
import Clients from "./Clients";
import Contact from "./Contact";
import Services from "./Services";
import Stats from "./Stats";
// import Team from "./Team";
import Vision from "./Vision";
import WhyUs from "./WhyUs";

function Main() {
  return (
    <main>
      <Services />
      <About />
      <Stats />
      <WhyUs />
      <Clients />
      <Vision />
      {/* <Team /> */}
      <Contact />
    </main>
  );
}

export default Main;

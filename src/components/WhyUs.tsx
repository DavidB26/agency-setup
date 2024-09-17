//Components
import Container from "./Container";
import Title from "./Title";
import AnimatedDiv from "./AnimatedDiv";
import SpotlightText from "./SpotlightText";

//Variants
import { fadeIn } from "../utils/variants";

const reasons = [
  {
    reason: "Expertos en la industria",
    description:
      "Con un profundo conocimiento en múltiples industrias, nuestra agencia combina experiencia y creatividad para ofrecer soluciones digitales que se adaptan a las necesidades específicas de cada sector. Nuestra capacidad para entender y anticipar las tendencias del mercado nos permite diseñar estrategias efectivas que impulsan el éxito de nuestros clientes.",
  },
  {
    reason: "Amplia experiencia",
    description:
      "Con una sólida base en tecnologías de la información, nuestra agencia domina las herramientas y plataformas más avanzadas para ofrecer soluciones digitales robustas y seguras. Nuestra profunda experiencia técnica nos permite desarrollar proyectos complejos con precisión, garantizando que cada aspecto tecnológico funcione a la perfección para apoyar tus objetivos de negocio.",
  },
  {
    reason: "Solución dedicada",
    description:
      "Nos comprometemos a ofrecer soluciones personalizadas que se alinean perfectamente con las necesidades y objetivos únicos de cada cliente. Nuestro enfoque dedicado asegura que cada proyecto reciba la atención y el cuidado que merece, brindando resultados efectivos y duraderos.",
  },
];

function WhyUs() {
  return (
    <section className="py-20 lg:py-24" id="why-us">
      <Container>
        <Title title="Por que deberias elegirnos" underline="center" align="center" />
        <SpotlightText text="estas son las razones" align="center"/>
        <div className="flex flex-col gap-5 lg:gap-10 mt-14 lg:flex-row">
          {reasons.map((reason, index) => (
            <AnimatedDiv
              variant={fadeIn}
              className="p-10 bg-[image-set(url('./assets/bg-why.webp')type('image/webp'),_url('./assets/bg-why.jpg')type('image/jpeg'))] bg-cover bg-blue-700 lg:w-1/3"
              key={index}
            >
              <h4 className="mb-5 text-xl font-black text-white uppercase lg:text-3xl">
                {reason.reason}
              </h4>
              <p className="mb-10 text-sm text-white lg:text-base">{reason.description}</p>
            </AnimatedDiv>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default WhyUs;

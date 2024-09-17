//Components
import Container from "./Container";
import AnimatedDiv from "./AnimatedDiv";

//Variants
import { fadeIn } from "../utils/variants";

const vision = [
  {
    title: "Nuestra filosofía",
    paragraph: [
      "Creemos en el poder de la creatividad y la innovación para transformar ideas en experiencias digitales únicas.",
      "Nos esforzamos por combinar estrategia y diseño para crear soluciones que no solo cumplan con las expectativas de nuestros clientes, sino que también inspiren y conecten con sus audiencias."
    ]
  },
  {
    title: "Nuestra visión",
    paragraph: [
      "Nuestra visión es ser líderes en el desarrollo de soluciones digitales integrales, impulsando el crecimiento sostenible de nuestros clientes a través de la innovación continua y un enfoque centrado en el usuario.",
      "Aspiramos a ser la agencia de referencia para aquellas marcas que buscan destacar en el mundo digital.",
    ]
  },
];

function Vision() {
  return (
    <section className="py-12 lg:py-24 bg-fixed bg-cover bg-center bg-[image-set(url('./assets/bg-vision.webp')type('image/webp'),_url('./assets/bg-vision.jpg')type('image/jpeg'))]">
      <Container className='flex flex-col lg:flex-row'>
        <div className="w-full h-52 md:h-96 lg:w-1/2 lg:h-auto bg-cover bg-center bg-[image-set(url('./assets/brandable-red.webp')type('image/webp'),_url('./assets/brandable-red.png')type('image/jpeg'))]">
        </div>
        <div className='flex flex-col p-10 bg-white md:p-16 gap-7 lg:w-1/2'>
          {vision.map((vision, index) => (
            <AnimatedDiv
              variant={fadeIn}
              key={index}
            >
              <h2 className='pb-5 text-3xl font-black uppercase lg:text-4xl'>{vision.title}</h2>
              {vision.paragraph.map((paragraph, index) => (
                <p key={index} className="text-sm lg:text-base">{paragraph}</p>
              ))}
            </AnimatedDiv>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default Vision;

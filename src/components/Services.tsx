//Components
import Container from "./Container";
import AnimatedDiv from "./AnimatedDiv";

//Variants
import { bottomToTop } from "../utils/variants";

const services = [
  {
    title: "Desarrollo Web",
    subServices: [
      "Integración de E-commerce",
      "Desarrollo de Aplicaciones Web",
      "Optimización de Velocidad y Rendimiento",
      "Consultoría en Experiencia de Usuario (UX/UI)",
      "Desarrollo de Sistemas de Gestión de Contenidos (CMS)",
    ],
  },
  {
    title: "Branding y Diseño Integral",
    subServices: [
      "Desarrollo de identidad de marca (logotipo, paleta de colores, tipografía)",
      "Diseño publicitario (campañas y material promocional)",
      "Diseño y desarrollo de sitios web personalizados",
      "Creación de contenido visual y gráfico para web y redes sociales"
    ],
  },
  {
    title: "Marketing Digital",
    subServices: [
      "Diseño de estrategia y consultoría",
      "Gestión de redes sociales",
      "Media Planning",
      "SEO y SEM",
      "Inbound marketing (captación y seguimiento de leads)"
    ],
  },
];

function Services() {;
  return (
    <section
      className="bg-fixed bg-cover bg-center py-20 lg:py-24 bg-[image-set(url('./assets/bg-services.webp')type('image/webp'),_url('./assets/bg-services.jpg')type('image/jpeg'))]"
      id='services'
    >
      <Container className='flex flex-col justify-center gap-10 lg:flex-row'>
        {services.map((service, index) => (
          <AnimatedDiv className='flex justify-center' variant={bottomToTop} key={index}>
            <span className="relative w-16 text-2xl font-extrabold text-blue-brandable before:content-[''] before:w-1 before:h-8 before:inline-block before:bg-blue-brandable before:absolute before:right-4 before:top-[2px]">
              0{index + 1}
            </span>
            <div className='flex flex-col  gap-5 w-[250px]'>
              <h2 className='lg:mt-[0px] mt-[3px] lg:text-3xl text-xl font-black text-gray-800 uppercase'>
                {service.title}
              </h2>
              <ul className='flex flex-col gap-5 '>
                {service.subServices.map((subservices, index) => (
                  <li
                    key={index}
                    className='text-sm font-semibold text-gray-800 underline uppercase hover:text-blue-500'
                  >
                      {subservices}
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedDiv>
        ))}
      </Container>
    </section>
  );
}

export default Services;

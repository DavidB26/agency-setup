//Components
import Container from "./Container";
import AnimatedDiv from "./AnimatedDiv";

//Variants
import { RightToLeft, bottomToTop, leftToRight } from "../utils/variants";
import Title from "./Title";
import SpotlightText from "./SpotlightText";

//Assets 
import Brand from '../assets/brand-blue.png'
import BrandOpt from '../assets/brand-blue.webp'
import Able from '../assets/able-blue.png'
import AbleOpt from '../assets/able-blue.webp'

const about = [
  {
    title: "Damos vida a tus ideas",
    subtitle: "Soluciones Innovadoras para un Mundo Digital",
    paragraph:
      "Desde el desarrollo web hasta el marketing digital, ofrecemos servicios integrales que elevan tu presencia en línea y fomentan un crecimiento sostenible.",
  },
];

function About() {
  return (
    <section className='bg-white py-36' id="about">
      <Container className='flex flex-col justify-between gap-20 lg:flex-row '>
        <div className='overflow-hidden'>
          <AnimatedDiv variant={leftToRight}>
            <picture>
              <source srcSet={BrandOpt} type="image/webp"/>
              <img src={Brand} alt="Brand" className='h-16 mr-auto md:h-full'/>
            </picture>
          </AnimatedDiv>
          <AnimatedDiv variant={RightToLeft}>
            <picture>
              <source srcSet={AbleOpt} type="image/webp"/>
              <img src={Able} alt="Able" className='h-16 ml-auto md:h-full'/>
            </picture>
          </AnimatedDiv>
        </div>
        {about.map((about, index) => (
          <AnimatedDiv
            key={index}
            variant={bottomToTop}
            className='flex flex-col lg:w-[550px]'
          >
            <div className=''>
              <Title title={about.title} underline='left' align='left' />
              <SpotlightText text={about.subtitle} />
              <p className='pt-5 text-sm lg:text-base'>{about.paragraph}</p>
            </div>
          </AnimatedDiv>
        ))}
      </Container>
    </section>
  );
}

export default About;

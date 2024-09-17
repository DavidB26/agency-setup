//React
import { useEffect } from "react";

//Components
import Header from "./Header/Header";
import Social from "./Social";

//Effects
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

//Variants
import { fadeIn, leftToRight } from "../utils/variants";
import Container from "./Container";

const parent = {
  visible: {
    opacity: 1,
    transition: { when: "beforeChildren", staggerChildren: 0.2 },
  },
  hidden: {
    opacity: 0,
    transition: {
      when: "afterChildren",
    },
  },
};

function Hero() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial='hidden'
      variants={parent}
      className="bg-[image-set(url('./assets/bg-principal-lg.webp')type('image/webp'),_url('./assets/bg-principal-lg.jpg')type('image/jpeg'))] h-screen bg-cover bg-center flex flex-col"
    >
      <Header />
      <Container className='flex flex-col items-start justify-center w-full gap-6 px-6 grow'>
        <motion.h1
          variants={leftToRight}
          className='text-white lg:text-[110px] text-5xl font-black uppercase relative max-w-2xl'
        >
          Potencia <br className="d-lg-none d-block"/> tu Marca
        </motion.h1>
        <motion.p
          variants={leftToRight}
          className='max-w-xs text-sm text-white lg:max-w-3xl md:text-base'
        >
          En Brandable, transformamos tus ideas en presencia digital con
          creatividad y precisión. Ofrecemos soluciones innovadoras para
          conectar con tu audiencia y crecer de manera sostenible.
        </motion.p>
        <motion.p
          variants={leftToRight}
          className='max-w-xs text-sm text-white lg:max-w-3xl md:text-base'
        >
          Confía en nosotros como tu socio estratégico para destacar en un
          entorno competitivo.
        </motion.p>
        <motion.a
          variants={fadeIn}
          className='px-8 py-5 font-bold text-white underline uppercase transition border-2 border-white border-solid hover:scale-95 active:scale-100'
          href="#contact"
        >
          Contáctanos
        </motion.a>
        <Social className='w-full md:max-w-xs md:gap-12 md:justify-start' />
      </Container>
    </motion.div>
  );
}

export default Hero;

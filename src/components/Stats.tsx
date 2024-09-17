//Components
import Container from "./Container";
import Counter from "./Counter";

//Hooks
import useAnimateInView from "../hooks/useAnimateInView";

//Effects
import { motion } from "framer-motion";

//Variants
import { fadeIn } from "../utils/variants";

//Icons
import { FaPlus } from "react-icons/fa6";
import Title from "./Title";

function Stats() {
  const { ref: statsRef1, controls: statsControls1 } = useAnimateInView();
  const { ref: statsRef2, controls: statsControls2 } = useAnimateInView();
  const { ref: statsRef3, controls: statsControls3 } = useAnimateInView();

  return (
    <section className="bg-[image-set(url('./assets/bg-services.webp')type('image/webp'),_url('./assets/bg-services.jpg')type('image/jpeg'))] bg-cover bg-center py-20 lg:py-24" id="stats">
      <Container>
        <Title
          title='Disfruta de nuestros ultimos trabajos'
          align='center'
          underline='center'
        />
        <div className='grid gap-20 px-4 mt-20 lg:grid-cols-3'>
          <motion.div
            ref={statsRef1}
            animate={statsControls1}
            initial='hidden'
            variants={fadeIn}
            className='grid items-center grid-cols-2 gap-5'
          >
            <div className='flex items-center justify-end'>
              <Counter
                from={0}
                to={7}
                className='text-5xl font-black text-right text-blue-brandable'
              />
              <FaPlus size={32} color='#0900BC' className='mt-2' />
            </div>
            <h4 className='text-sm font-semibold tracking-wide uppercase'>
              clientes satisfechos
            </h4>
          </motion.div>
          <motion.div
            ref={statsRef2}
            animate={statsControls2}
            initial='hidden'
            variants={fadeIn}
            className='grid items-center grid-cols-2 gap-5'
          >
            <div className='flex items-center justify-end'>
              <Counter
                from={0}
                to={20}
                className='text-5xl font-black text-right text-blue-brandable'
              />
              <FaPlus size={32} color='#0900BC' className='mt-2' />
            </div>
            <h4 className='text-sm font-semibold tracking-wide uppercase'>
              proyectos completados
            </h4>
          </motion.div>
          <motion.div
            ref={statsRef3}
            animate={statsControls3}
            initial='hidden'
            variants={fadeIn}
            className='grid items-center grid-cols-2 gap-5'
          >
            <div className='flex items-center justify-end'>
              <Counter
                from={0}
                to={5}
                className='text-5xl font-black text-right text-blue-brandable'
              />
              <FaPlus size={32} color='#0900BC' className='mt-2' />
            </div>
            <h4 className='text-sm font-semibold tracking-wide uppercase'>
              partners worldwide
            </h4>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}

export default Stats;

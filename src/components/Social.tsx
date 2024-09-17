import { twMerge } from "tailwind-merge";

//Icons
import Icon from "../assets/icons";

//Effects
import { motion } from "framer-motion";

//Variants
import { fadeIn } from "../utils/variants";

interface SocialProps {
  className?: string;
}
function Social({ className }: SocialProps) {
  return (
    <motion.div variants={fadeIn} className={twMerge("flex justify-evenly gap-2 py-6", className)}>
      <a href='#contact' className='active:scale-95 hover:scale-110'>
        <Icon name='mail' size={22} />
      </a>
      <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://www.instagram.com/brandable.pe/'
        className='active:scale-95 hover:scale-110'
      >
        <Icon name='instagram' size={22} />
      </a>
      {/* <a
        target='_blank'
        rel='noopener noreferrer'
        href='https://twitter.com/brandable_pe'
        className='active:scale-95 hover:scale-110'
      >
        <Icon name='x' size={22} />
      </a> */}
    </motion.div>
  );
}

export default Social;

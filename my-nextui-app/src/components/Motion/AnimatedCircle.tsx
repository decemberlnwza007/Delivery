import { motion } from 'framer-motion';

const AnimatedCircle: React.FC = () => {
  return (
    <motion.div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        width: '300px',
        height: '300px',
        borderRadius: '50%',
        background: 'rgba(255, 255, 255, 0.3)',
        translate: '-50% -50%',
        filter: 'blur(50px)',
      }}
      animate={{
        scale: [1, 1.1, 1],
        rotate: [0, 360],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  );
};

export default AnimatedCircle;

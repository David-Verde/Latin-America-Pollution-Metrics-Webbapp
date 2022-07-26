import React from 'react';
import { motion } from 'framer-motion';

const loaderVariants = {
  animation: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        repeat: Infinity,
        duration: 0.5,
      },
      y: {
        repeat: Infinity,
        duration: 0.25,
        ease: 'easeOut',
      },
    },
  },
};

const Loading = () => (
  // <div className={style.loaderWrapper}>
  <motion.div
    className="loader"
    variants={loaderVariants}
    animate="animation"
  >
    .
  </motion.div>
  // </div>
);

export default Loading;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { sendFilter } from '../../redux/pollution/pollution';
import Headline from './Headline';
import MainCountry from './MainCountry';
import options from './options';

const homePageVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
  exit: {
    x: '-100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const homeVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 1.2, delay: 1.2 },
  },
};

const HomePage = () => {
  const selectStatus = useSelector((state) => state.pollution.selectStatus);
  const dispatch = useDispatch();
  const handleFilter = (target) => {
    dispatch(sendFilter(target));
  };

  return (
    <motion.div
      className="bg-dribble min-h-screen"
      variants={homePageVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <Headline />
      <div className="bg-category px-6 sm:px-10 md:px-14 lg:px-20 py-1">
        <motion.div
          className="container mx-auto flex"
          variants={homeVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="font-lato text-sm lg:text-base text-white uppercase lg:py-2">
            Air Pollution by Air Quality:
          </h2>
          <select
            name="category"
            defaultValue={selectStatus}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-16 mx-4 pl-2 font-lato text-lg uppercase"
          >
            {options.map((option) => (
              <option key={option.id} value={option.text}>
                {option.text}
              </option>
            ))}
          </select>
        </motion.div>
      </div>
      <MainCountry />
    </motion.div>
  );
};

export default HomePage;

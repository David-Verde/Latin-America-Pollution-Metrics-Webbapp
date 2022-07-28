import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const detailsPageVariants = {
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
    x: '100vw',
    transition: {
      ease: 'easeInOut',
    },
  },
};

const DetailsPage = ({ name, air, components }) => (
  <motion.div
    className="bg-dribble py-1 min-h-screen"
    variants={detailsPageVariants}
    initial="hidden"
    animate="visible"
    exit="exit"
  >
    <div className="">
      <div className="bg-head py-4 sm:px-10 md:pt-20 lg:px-20 sm:py-8 md:py-10 pt-14 sm:pt-16 md:pt-20 lg:pt-24">
        <h2 className="font-lato font-black text-xl lg:text-2xl text-white text-center uppercase">{name}</h2>
        <p className="font-lato font-normal text-base lg:text-lg text-white text-center">{`Air quality index: ${air}`}</p>
      </div>
      <p className="bg-category font-lato text-sm text-white uppercase px-6 sm:px-10 sm:px-14 lg:px-20 py-2">Air&#39;s components:</p>
      <ul className="lg:grid lg:grid-cols-4">
        <li className="flex justify-between lg:flex-col lg:justify-center lg:items-center px-6 sm:px-10 sm:px-14 lg:px-20 py-4 md:py-5 lg:py-8 lg:gap-4 row">
          <p className="font-lato font-bold text-base lg:text-lg text-white">Co</p>
          <p className="font-lato font-normal text-base lg:text-lg text-white lg:w-28 text-center">{`${components.co} μg/m3`}</p>
        </li>
        <li className="flex justify-between lg:flex-col lg:justify-center lg:items-center px-6 sm:px-10 sm:px-14 lg:px-20 py-4 md:py-5 lg:py-8 lg:gap-4 row">
          <p className="font-lato font-bold text-base lg:text-lg text-white">No</p>
          <p className="font-lato font-normal text-base lg:text-lg text-white lg:w-28 text-center">{`${components.no} μg/m3`}</p>
        </li>
        <li className="flex justify-between lg:flex-col lg:justify-center lg:items-center px-6 sm:px-10 sm:px-14 lg:px-20 py-4 md:py-5 lg:py-8 lg:gap-4 row">
          <p className="font-lato font-bold text-base lg:text-lg text-white">No2</p>
          <p className="font-lato font-normal text-base lg:text-lg text-white lg:w-28 text-center">{`${components.no2} μg/m3`}</p>
        </li>
        <li className="flex justify-between lg:flex-col lg:justify-center lg:items-center px-6 sm:px-10 sm:px-14 lg:px-20 py-4 md:py-5 lg:py-8 lg:gap-4 row">
          <p className="font-lato font-bold text-base lg:text-lg text-white">O3</p>
          <p className="font-lato font-normal text-base lg:text-lg text-white lg:w-28 text-center">{`${components.o3} μg/m3`}</p>
        </li>
        <li className="flex justify-between lg:flex-col lg:justify-center lg:items-center px-6 sm:px-10 sm:px-14 lg:px-20 py-4 md:py-5 lg:py-8 lg:gap-4 row">
          <p className="font-lato font-bold text-base lg:text-lg text-white">SO2</p>
          <p className="font-lato font-normal text-base lg:text-lg text-white lg:w-28 text-center">{`${components.so2} μg/m3`}</p>
        </li>
        <li className="flex justify-between lg:flex-col lg:justify-center lg:items-center px-6 sm:px-10 sm:px-14 lg:px-20 py-4 md:py-5 lg:py-8 lg:gap-4 row">
          <p className="font-lato font-bold text-base lg:text-lg text-white">PM25</p>
          <p className="font-lato font-normal text-base lg:text-lg text-white lg:w-28 text-center">{`${components.pm2_5} μg/m3`}</p>
        </li>
        <li className="flex justify-between lg:flex-col lg:justify-center lg:items-center px-6 sm:px-10 sm:px-14 lg:px-20 py-4 md:py-5 lg:py-8 lg:gap-4 row">
          <p className="font-lato font-bold text-base lg:text-lg text-white">PM10</p>
          <p className="font-lato font-normal text-base lg:text-lg text-white lg:w-28 text-center">{`${components.pm10} μg/m3`}</p>
        </li>
        <li className="flex justify-between lg:flex-col lg:justify-center lg:items-center px-6 sm:px-10 sm:px-14 lg:px-20 py-4 md:py-5 lg:py-8 lg:gap-4 row">
          <p className="font-lato font-bold text-base lg:text-lg text-white">NH3</p>
          <p className="font-lato font-normal text-base lg:text-lg text-white lg:w-28 text-center">{`${components.nh3} μg/m3`}</p>
        </li>
      </ul>
    </div>
  </motion.div>
);

DetailsPage.propTypes = {
  name: PropTypes.string.isRequired,
  air: PropTypes.string.isRequired,
  components: PropTypes.shape({
    co: PropTypes.number.isRequired,
    no: PropTypes.number.isRequired,
    no2: PropTypes.number.isRequired,
    o3: PropTypes.number.isRequired,
    so2: PropTypes.number.isRequired,
    pm2_5: PropTypes.number.isRequired,
    pm10: PropTypes.number.isRequired,
    nh3: PropTypes.number.isRequired,
  }).isRequired,
};

export default DetailsPage;

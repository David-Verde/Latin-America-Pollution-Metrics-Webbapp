/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, delay: 1.2 },
  },
};

const Country = ({ name, air }) => (
  <motion.div
    variants={cardsVariants}
    initial="hidden"
    animate="visible"
  >
    <Link to={`/${name}`} className="bg-dribble flex flex-col items-center gap-4 px-4 sm:px-8 py-2 sm:py-6 country">
      <div data-testid="countryCategory" className="">
        <img src={require(`../../assets/${name}.png`).default} alt={`${name}'s map`} className="opacity-30 max-h-20 sm:max-h-24 md:max-h-28 xl:max-h-32" />
      </div>
      <div className="min-w-full">
        <h2 data-testid="countryTitle" className="font-lato font-black text-base lg:text-lg text-white text-right uppercase">{name}</h2>
        <p data-testid="countryAirQuality" className="font-lato font-normal text-base lg:text-lg text-white text-right">{`AQI: ${air}`}</p>
      </div>
    </Link>
  </motion.div>
);

Country.propTypes = {
  name: PropTypes.string.isRequired,
  air: PropTypes.string.isRequired,
};

export default Country;

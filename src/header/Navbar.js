import React from 'react';
import { FaAngleLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import usePollution from '../hooks/usePollution';

const titleVariants = {
  hidden: {
    y: -500,
  },
  visible: {
    y: 0,
    transition: { duration: 1.2 },
  },
};

const iconVariants = {
  hidden: {
    x: '-100vw',
  },
  visible: {
    x: 0,
    transition: { duration: 1.2 },
  },
};

const Navbar = () => {
  usePollution();
  return (
    <header className="fixed w-full z-10 px-6 sm:px-10 md:px-14 lg:px-20 py-3 md:py-4 lg:py-6">
      <nav data-testid="navbarContainer" className="container mx-auto grid grid-cols-6">
        <motion.div
          variants={iconVariants}
          initial="hidden"
          animate="visible"
        >
          <Link
            to="/"
            className="text-white justify-self-start"
          >
            <FaAngleLeft className="h-7 md:h-9" />

          </Link>
        </motion.div>
        <motion.p
          data-testid="navbarTitle"
          className="font-gill text-xl lg:text-2xl text-white col-span-4 place-self-center pt-1"
          variants={titleVariants}
          initial="hidden"
          animate="visible"
        >
          Latinoamerica&#39;s Air Pollution

        </motion.p>
      </nav>
    </header>
  );
};

export default Navbar;

import React from 'react';
import {
  Switch,
  Route,
  useLocation,
} from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AnimatePresence } from 'framer-motion';
import Navbar from '../general/Navbar';
import HomePage from './home/HomePage';
import NotMatch from './home/NotMatch';
import DetailsPage from './details/DetailsPage';

const App = () => {
  const countries = useSelector((state) => state.pollution.filtered);
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route path="/" exact>
            <HomePage />
          </Route>
          {countries.map((country) => (
            <Route key={country.id} path={`/${country.name}`}>
              <DetailsPage
                name={country.name}
                air={country.air}
                components={country.components}
              />
            </Route>
          ))}
          <Route path="*">
            <NotMatch />
          </Route>
        </Switch>
      </AnimatePresence>
    </>
  );
};

export default App;

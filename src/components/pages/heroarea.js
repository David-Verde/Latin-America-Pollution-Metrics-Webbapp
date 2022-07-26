import React from 'react';
import PropTypes from 'prop-types';
import BackButton from './backbutton';

const Header = ({ backButtonTitle, title }) => (
  <div className="header-container">
    <div className="header-contents">
      <BackButton title={backButtonTitle} />
      <p className="back-button">{title}</p>
    </div>
  </div>
);

Header.propTypes = ({
  title: PropTypes.string,
  backButton: PropTypes.string,
}).isRequired;

export default Header;

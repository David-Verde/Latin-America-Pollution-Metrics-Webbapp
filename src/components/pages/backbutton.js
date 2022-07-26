import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const BackButton = ({ title }) => {
  const history = useHistory();

  const goBack = () => {
    history.push('/');
  };

  return (
    <button type="button" className="logo-button" onClick={goBack}>{title}</button>
  );
};

BackButton.propTypes = ({
  title: PropTypes.string,
}).isRequired;

export default BackButton;

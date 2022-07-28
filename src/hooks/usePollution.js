import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addInitialPollution } from '../redux/pollution/pollution';

const usePollution = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addInitialPollution());
  }, []);
};

export default usePollution;

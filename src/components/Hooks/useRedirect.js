import { useHistory } from 'react-router';

const useRedirect = (location) => {
  const history = useHistory();

  const redirect = () => {
    history.push(location);
  };
  return { redirect };
};

export default useRedirect;

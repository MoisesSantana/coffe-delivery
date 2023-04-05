import useMediaQuery from '@mui/material/useMediaQuery';

const useIsMobile = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return isMobile;
};

export default useIsMobile;

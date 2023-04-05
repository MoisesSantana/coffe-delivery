import useMediaQuery from '@mui/material/useMediaQuery';

const useIsMobile = () => {
  const isMobile = useMediaQuery('(min-width:600px)');

  return isMobile;
};

export default useIsMobile;

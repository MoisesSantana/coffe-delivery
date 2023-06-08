import { Box, styled } from '@mui/material';

export const SuccessContainer = styled(Box)`
  width: 60%;
  margin: auto;
  padding-top: 105px;
  margin-top: 80px;
  @media (max-width: 1820px) {
    width: 70%;
  }
  @media (max-width: 1540px) {
    width: 80%;
  }
  @media (max-width: 1360px) {
    width: 90%;
  }
`;

export const MainContent = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;

  > div {
    width: 526px;
    border-radius: 6px 36px;
    padding: 1px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);
  }

  section {
    display: flex;
    flex-direction: column;
    gap: 32px;
    background-color: #fafafa;
    width: 100%;
    height: 100%;
    border-radius: 6px 36px;
    padding: 40px;
  }

  @media (max-width: 1100px) {
    img {
      display: none;
    }
  }
`;

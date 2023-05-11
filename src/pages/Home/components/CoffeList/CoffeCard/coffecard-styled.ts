import { Button, Card, Chip, styled } from '@mui/material';

export const CoffeCardContainer = styled(Card)`
  background-color: ${({ theme }) => theme.palette.grey[200]};
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow: visible;

  .coffe-image {
    margin-top: -20px;
  }
`;

export const Tag = styled(Chip)`
  color: ${({ theme }) => theme.palette.warning.dark};
  background-color: ${({ theme }) => theme.palette.warning.light};
  text-transform: uppercase;
  height: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 0.6rem;
  padding: 8px 4px;
`;

export const FooterCardContainer = styled('footer')`
  display: flex;
  margin-bottom: 10px;
  padding: 3px;
  width: 100%;
  justify-content: space-around;

  .price {
    color: ${({ theme }) => theme.palette.grey[700]};
    font-family: 'Baloo 2', cursive;
    font-weight: 900;
    font-size: 1.5rem;
  }

  .price::before {
    content: 'R$ ';
    font-family: 'Roboto', sans-serif;
    font-size: 0.85rem;
    font-weight: normal;
  }

  .manage-quantity {
    display: flex;
    justify-content: space-evenly;
    width: 50%;

    .cart {
      cursor: pointer;
    }
  }
`;

export const ButtonContainer = styled(Button)`
  border: none;
  max-width: 10px !important;
  min-width: 10px !important;
  padding: 0 10px;
  background-color: ${({ theme }) => theme.palette.grey[400]};
  color: ${({ theme }) => theme.palette.secondary.main};

  &:hover {
    border: none;
    color: ${({ theme }) => theme.palette.secondary.dark};
  }

  &:nth-child(2) {
    color: ${({ theme }) => theme.palette.grey[900]};
    cursor: auto;
    font-size: 1rem;

    &:hover {
      background-color: ${({ theme }) => theme.palette.grey[400]};
      color: ${({ theme }) => theme.palette.grey[900]};
    }
  }
`;

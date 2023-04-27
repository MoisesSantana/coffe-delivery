import { Button, ButtonGroup, Card, Chip, styled } from '@mui/material';

export const CoffeCardContainer = styled(Card)`
  background-color: #f3f2f2;
  width: 256px;
  height: 310px;
  border-radius: 6px 36px;
  box-shadow: none;
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
  color: #c47f17;
  background-color: #f1e9c9;
  text-transform: uppercase;
  height: 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
  font-size: 10px;
  padding: 8px 4px;
`;

export const FooterCardContainer = styled('footer')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
  padding: 3px;
  width: 100%;
  justify-content: space-around;

  &:nth-child() {
    height: 100%;
  }

  .price {
    color: #574f4d;
    font-family: 'Baloo 2', cursive;
    font-weight: 900;
    font-size: 24px;
  }

  .price::before {
    content: 'R$ ';
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: 400;
  }

  .manage-quantity {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
    height: 100%;

    &:nth-child() {
      height: 100%;
    }

    .cart {
      cursor: pointer;
    }
  }
`;

export const ButtonGroupContainer = styled(ButtonGroup)`
  height: 100%;
  border-radius: 6px;
`;

export const ButtonContainer = styled(Button)`
  border: none;
  max-width: 10px !important;
  min-width: 10px !important;
  padding: 0 10px;
  background-color: #e6e5e5;
  color: #8047f8;

  &:hover {
    border: none;
    color: #4b2995;
  }

  &:nth-child(2) {
    color: #272221;
    cursor: auto;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;

    &:hover {
      background-color: #e6e5e5;
      color: #272221;
    }
  }
`;

import { Button, ButtonBase, styled } from '@mui/material';

export const CartContainer = styled('aside')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (max-width: 1360px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const CartProductList = styled('ul')`
  list-style: none;
  overflow-y: auto;
  height: 20rem;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;

  li {
    width: 368px;
    padding: 40px 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[400]};
    display: flex;
    justify-content: space-between;

    &:first-child {
      padding-top: 0;
    }

    img {
      width: 64px;
    }

    .middle-info {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 1.5rem;
      justify-content: space-between;

      .qty {
        display: flex;
        gap: 0.5rem;
      }
    }
  }
`;

export const RemoveButtonContainer = styled(Button)`
  border: none;
  background-color: ${({ theme }) => theme.palette.grey[400]};
  color: ${({ theme }) => theme.palette.grey[700]};
  font-weight: normal;
  padding: 0 10px;
  font-size: 0.75rem;
  font-family: 'Roboto', sans-serif;

  img {
    max-width: 16px;
    margin-right: 6px;
  }
`;

export const RowGroup = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 24px 0;

  div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ButtonContainer = styled(ButtonBase)`
  width: 100%;
  background-color: ${({ theme }) => theme.palette.warning.main};
  padding: 12px 8px;
  font-family: 'Roboto', sans-serif;
  color: white;

  font-weight: 700;
  font-size: 14px;
  line-height: 160%;

  text-transform: uppercase;
  border-radius: 6px;
  transition: 300ms ease-in-out;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.palette.warning.dark};
  }

  &:disabled {
    background-color: ${({ theme }) => theme.palette.warning.light};
  }
`;

import { Button, styled } from '@mui/material';

export const CartContainer = styled('aside')`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
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

    .teste {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding: 0 1.5rem;
      justify-content: space-between;

      .teste2 {
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

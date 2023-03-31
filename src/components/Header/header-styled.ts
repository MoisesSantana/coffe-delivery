import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
  width: 100%;
  background-color: #fafafa;
  display: flex;
  justify-content: space-between;
  padding: 0 4rem;
  margin: 0;
  height: 105px;
  align-items: center;
  @media (max-width: 768px) {
    padding: 0 2rem;
  }

  .actions {
    display: flex;
    align-items: center;
    gap: 12px;
    height: 38px;
    justify-content: space-between;

    div {
      padding: 8px;
      box-sizing: border-box;
      background-color: orange;
      display: flex;
      gap: 4px;
      align-items: center;
      border-radius: 6px;
      height: 100%;
      color: #4b2995;
    }

    .location {
      background-color: #ebe5f9;
    }

    .cart {
      background-color: #f1e9c9;
    }
  }
`;

import { styled } from '@mui/material';

export const HeaderContainer = styled('header')`
  width: 100%;
  padding: 0 20%;
  background-color: ${({ theme }) => theme.palette.grey[100]};
  display: flex;
  justify-content: space-between;
  height: 105px;
  align-items: center;
  position: fixed;
  right: 50%;
  top: 0;
  transform: translateX(50%);
  z-index: 20;

  @media (max-width: 1820px) {
    width: 70%;
    padding: 0;
  }
  @media (max-width: 1540px) {
    width: 80%;
  }
  @media (max-width: 1360px) {
    width: 90%;
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
      display: flex;
      gap: 4px;
      align-items: center;
      border-radius: 6px;
      height: 100%;
      color: ${({ theme }) => theme.palette.secondary.dark};
    }

    .location {
      background-color: ${({ theme }) => theme.palette.secondary.light};
    }

    .cart {
      line-height: 0;
      border: none;
      height: 100%;
      width: 38px;
      border-radius: 6px;
      cursor: pointer;
      background-color: ${({ theme }) => theme.palette.warning.light};
      position: relative;
      transition: 200ms ease-in-out;

      :hover {
        filter: brightness(0.95);
      }

      span {
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        border-radius: 50%;
        font-family: ${({ theme }) => theme.typography.body2.fontFamily};
        font-size: 12px;
        font-weight: bold;
        width: 20px;
        height: 20px;
        background-color: ${({ theme }) => theme.palette.warning.dark};
        color: ${({ theme }) => theme.palette.grey[100]};
        right: -8px;
        top: -8px;
      }
    }
  }
`;

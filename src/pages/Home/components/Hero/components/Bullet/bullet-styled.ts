import { styled } from '@mui/material';

export const BulletContainer = styled('div')`
  display: flex;
  align-items: center;
  width: 50%;
  gap: 8px;

  &:nth-child(odd) {
    width: 231px;
  }

  &:nth-child(even) {
    width: 294px;
  }
`;

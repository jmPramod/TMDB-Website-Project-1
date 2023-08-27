import styled from '@emotion/styled';
import { CircularProgress } from '@mui/material';

export const styles = {
  container: styled('div')`
    height: 100vh;
    width: 100vw;

    display: flex;
    justify-content: center;
    align-items: center;
  `,
  loader: styled(CircularProgress)``,
};

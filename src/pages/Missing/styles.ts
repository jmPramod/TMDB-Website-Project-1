import styled from '@emotion/styled';
import { Button, Chip, Typography } from '@mui/material';

export const styles = {
  container: styled('div')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    width: 100%;
    min-height: 80vh;
  `,
  chip: styled(Chip)``,
  title: styled(Typography)`
    margin-top: 15px;
    margin-bottom: 15px;
    font-weight: bold;
  `,
  body: styled(Typography)`
    white-space: pre-wrap;
  `,
  button: styled(Button)`
    margin-top: 25px;
  `,
};

import styled from '@emotion/styled';
import { Button, Typography } from '@mui/material';
import { colors } from './../../../../globalStyles';
export const styles = {
  mainContainer: styled('div')`
    display: flex;
    margin: 48px;
    justify-content: space-evenly;
    column-gap: 24px;

    @media (max-width: 1000px) {
      flex-direction: column;
      align-items: center;
      margin: 48px 24px;
      row-gap: 48px;
    }
  `,
  container: styled('div')`
    width: 100%;
    @media (min-width: 700px) {
      width: 80%;
    }
    @media (min-width: 1000px) {
      width: 555px;
    }

    /* background: ${colors.background.secondary}; */
    border-radius: 0px 0px 4px 4px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `,
  toolbox: styled('div')<{ $color: string }>`
    background: ${(props) => props.$color};
    padding: 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 600px) {
    }
  `,
  title: styled(Typography)`
    color: white;
  `,
  description: styled(Typography)`
    padding: 24px;
    color: ${colors.text.primary};
  `,
  button: styled(Button)<{ $bg: string }>`
    background-color: ${(props) => props.$bg};
    margin-bottom: 12px;
    width: 190px;
    margin: 24px;
  `,
  fb: styled('div')`
    @media (max-width: 600px) {
    }
  `,
  facebookButtonText: styled('a')`
    text-decoration: none;
    color: ${colors.text.inverse};
  `,
};

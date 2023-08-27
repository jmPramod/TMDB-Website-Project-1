import { Typography } from '@mui/material';
import styled from '@emotion/styled';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export const styles = {
  Container: styled('div')`
    display: flex;
    margin: 0px auto;
    justify-content: center;
    align-items: center;
    padding: 48px 0px;
    @media (max-width: 900px) {
      flex-direction: column;
      width: 90%;
    }
    @media (min-width: 900px) {
      width: 70%;
      gap: 2%;
    }
    @media (min-width: 900px) and (max-width: 1400px) {
      width: 90%;
      gap: 10%;
    }
  `,

  leftContainer: styled('div')`
    width: 45%;

    @media (max-width: 900px) {
      width: 100%;
      text-align: center;
    }
    @media (min-width: 900px) and (max-width: 1400px) {
      width: 50%;
    }
  `,

  rightContainer: styled('div')`
    width: 45%;

    @media (max-width: 900px) {
      width: 100%;
      text-align: center;
      margin: 24px 0px;
    }
    @media (min-width: 900px) and (max-width: 1400px) {
      width: 45%;
    }
  `,

  LLaboutImage: styled(LazyLoadImage)`
    width: 366px;
    height: 95%;
    @media (max-width: 900px) {
      width: 100%;
      height: 100%;
    }
  `,

  aboutContainer: styled('div')`
    display: flex;
    flex-direction: column;
    gap: 5px;
    padding: 12px 0px;
  `,
  descriptionContainer: styled('div')`
    display: flex;
    flex-direction: column;
    gap: 10px;
  `,
  secondaryTitle: styled(Typography)``,
  primaryTitle: styled(Typography)`
    margin-bottom: 2%;
    font-weight: bold;
  `,
  description: styled(Typography)``,
  lgnText: styled('span')`
    font-style: italic;
  `,
  welcomeMessage: styled(Typography)`
    padding: 24px 0px;
  `,
};

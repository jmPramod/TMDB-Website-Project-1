import styled from '@emotion/styled';
import { colors } from './../../../../globalStyles';
import { Typography } from '@mui/material';

export const styles = {
  mainContainer: styled('div')`
    position: relative;
    margin-bottom: 12vh;

    @media (max-width: 600px) {
      margin-bottom: 6vh;
    }
  `,
  container: styled('div')`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    max-width: 100vw;
    height: 65vh;
    overflow: hidden;
    @media (max-width: 600px) {
      align-items: stretch;
      height: 60vh;
    }
  `,
  video: styled('video')`
    flex-shrink: 0;
    min-width: 100%;
    margin: 0 auto;
    object-fit: cover;
    height: 100vh;

    @media (max-width: 600px) {
      min-width: 100%;
      height: auto;
    }
  `,
  banner: styled('div')`
    position: absolute;
    left: 0;
    right: 0;
    bottom: -10vh;
    height: 20vh;
    max-width: 100vw;

    @media (max-width: 600px) {
      bottom: -4vh;
      height: 12vh;
    }

    display: flex;
    align-items: center;
    justify-content: center;
  `,
  innerBanner: styled('div')`
    display: flex;
    align-items: center;
    background: ${colors.background.dark};
    color: white;

    height: 16vh;
    width: 70%;
    padding: 2vh 48px;

    @media (max-width: 600px) {
      width: 100%;
      height: 8vh;
      padding: 2vh 24px;
      margin: 0 24px;
    }

    @media (max-width: 350px) {
      padding: 2vh 12px;
      margin: 0 12px;
    }
  `,
  text: styled(Typography)`
    overflow: hidden;
    text-underline-offset: 5px;
  `,
  animateUp: styled('span')`
    display: inline-flex;
    font-style: italic;
    color: transparent;
    line-height: 1.2em;
    text-shadow: 0 0 white, 0 -1.2em ${colors.primary.main};
    transition: 0.3s;
    overflow: hidden;

    :hover {
      text-shadow: 0 1.2em white, 0 0 ${colors.primary.main};
    }
  `,
  animateUnderline: styled('span')`
    display: inline-flex;
    font-style: italic;
    color: transparent;
    line-height: 1.2em;
    text-shadow: 0 0 white, 0 1.2em #463380;
    transition: 0.3s;
    overflow: hidden;

    :hover {
      text-shadow: 0 -1.2em white, 0 0 #463380;
    }
  `,
};

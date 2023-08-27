import styled from '@emotion/styled';

export const styles = {
  mainContainer: styled('div')`
    width: 100%;
    overflow: hidden;
    display: flex;
    justify-content: center;
  `,
  videoContainer: styled('div')`
    @media (max-width: 600px) {
      margin: 8vh 0 3vh 0;
    }

    position: relative;
    width: 100vw;
    height: 56.25vw;
    margin: 7vh 0 3vh 0;

    @media (min-width: 800px) {
      width: 90vw;
      height: 50.625vw;
    }

    @media (min-width: 1100px) {
      width: 74vw;
      height: 41.625vw;
      margin-top: 10vh;
    }
  `,

  overlay: styled('a')`
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.5);
    :hover {
      cursor: pointer;
    }
  `,
  overlayText: styled('h1')`
    background-color: rgba(0, 0, 0, 0.75);
    color: white;
    padding: 24px;
    border-radius: 4px;

    @media (max-width: 900px) {
      font-size: 24px;
      padding: 12px;
    }
  `,
  video: styled('iframe')`
    background-color: black;
    width: 100%;
    height: 100%;
  `,
};

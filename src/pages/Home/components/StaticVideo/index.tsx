import { useMediaQuery } from '@mui/material';
import { useEffect, useRef } from 'react';
import { styles } from './styles';

const StaticVideo = () => {
  const tiny = useMediaQuery('(max-width: 320px)');
  const mobile = useMediaQuery('(max-width: 600px)');
  const twoLines = useMediaQuery('(min-width: 1200px)');
  const videoref = useRef<any>(null);
  useEffect(() => {
    let videoPlayer = videoref?.current;
    if (mobile) {
      videoPlayer.src =
        'https://elbasoft.com/manufacturing/LJN/ljn_banner_video_mobile.mp4';
    } else {
      videoPlayer.src =
        'https://elbasoft.com/manufacturing/LJN/ljn_banner_video_web.mp4';
    }
  }, [mobile]);

  const render = () => {
    return (
      <>
        <styles.mainContainer id="homeVideoHeader">
          <styles.container>
            <styles.video
              ref={videoref}
              autoPlay
              loop
              muted
              playsInline
              src={
                mobile
                  ? 'https://elbasoft.com/manufacturing/LJN/ljn_banner_video_mobile.mp4'
                  : 'https://elbasoft.com/manufacturing/LJN/ljn_banner_video_web.mp4'
              }
            ></styles.video>
            <styles.banner>
              <styles.innerBanner>
                <styles.text variant={mobile ? (tiny ? 'h5' : 'h4') : 'h3'}>
                  Where <styles.animateUp>entertainment</styles.animateUp> meets{' '}
                  {twoLines && <br />}
                  <styles.animateUnderline>
                    <u>stunning jewelry</u>.
                  </styles.animateUnderline>
                </styles.text>
              </styles.innerBanner>
            </styles.banner>
          </styles.container>
        </styles.mainContainer>
      </>
    );
  };
  return <>{render()}</>;
};

export default StaticVideo;

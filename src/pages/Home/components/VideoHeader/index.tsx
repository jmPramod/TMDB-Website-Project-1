import { useNavigate } from 'react-router-dom';
import { styles } from './styles';
// import { EventListType } from '../../../../Types/apiTypes';

// type Props = {
//   liveEvent: EventListType;
// };

const VideoHeader = (props: any) => {
  const navigate = useNavigate();

  return (
    <>
      <styles.mainContainer>
        <styles.videoContainer>
          <styles.video
            src={
              props.liveEvent?.event_vimeo_link
                ? `${props.liveEvent?.event_vimeo_link}?background=1&muted=0`
                : 'https://vimeo.com/event/2064071/embed?background=1'
            }
            allowFullScreen
          />
          <styles.overlay
            onClick={() => {
              navigate('/live');
            }}
          >
            {/* <styles.overlayText>Click to join the live feed</styles.overlayText> */}
          </styles.overlay>
        </styles.videoContainer>
      </styles.mainContainer>
    </>
  );
};

export default VideoHeader;

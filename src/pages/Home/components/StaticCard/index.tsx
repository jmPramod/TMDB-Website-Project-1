import fb from '../../../../assets/images/fb.png';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';
import { colors } from '../../../../globalStyles';
// import { colors } from '../../../../globalStyles';

const StaticCard = () => {
  const navigate = useNavigate();

  return (
    <styles.mainContainer>
      <styles.container>
        <styles.toolbox $color="#463380">
          <styles.title variant="h4">Join the diamond club</styles.title>
          <styles.fb>
            <img src={fb} alt="" />
          </styles.fb>
        </styles.toolbox>
        <styles.description variant="subtitle1">
          If you want access to even more giveaways, auctions, and deals on
          gorgeous jewelry, the Diamond Club is the place for you. Get daily
          updates on the jewelry industry and the brands you love!
        </styles.description>

        <styles.facebookButtonText
          href="https://www.facebook.com/groups/272866381671835"
          target="_blank"
          rel="noopener noreferrer"
        >
          {' '}
          <styles.button variant="contained" $bg="#463380">
            Join now{' '}
          </styles.button>
        </styles.facebookButtonText>
      </styles.container>
      <styles.container>
        <styles.toolbox
          $color={colors.primary.main}
          style={{ padding: '28px ' }}
        >
          <styles.title variant="h4">Want to win?</styles.title>
        </styles.toolbox>
        <styles.description variant="subtitle1">
          The Luxury Jewelry Network loves to give you opportunities to win some
          beautiful jewelry and gems. Check out the giveaways page to find out
          what chances you have to win today!
        </styles.description>
        <styles.button
          variant="contained"
          $bg={colors.primary.main}
          onClick={() => navigate('/giveaways')}
        >
          Take me there
        </styles.button>
      </styles.container>
    </styles.mainContainer>
  );
};

export default StaticCard;

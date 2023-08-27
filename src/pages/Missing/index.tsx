// import Footer from '../../components/Footer/Footer';
import { useNavigate } from 'react-router-dom';
import SubdirectoryArrowRightIcon from '@mui/icons-material/SubdirectoryArrowRight';
import { styles } from './styles';

const Missing = () => {
  const navigate = useNavigate();

  /* Final render */
  return (
    <>
      <styles.container>
        <styles.chip label="404 Error" color="primary"></styles.chip>
        <styles.title variant="h3">We've lost this page</styles.title>
        <styles.body variant="body1">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </styles.body>
        <styles.button
          variant="outlined"
          endIcon={<SubdirectoryArrowRightIcon />}
          onClick={() => navigate('/home')}
        >
          Return home
        </styles.button>
      </styles.container>
      {/* <Footer /> */}
    </>
  );
};

export default Missing;

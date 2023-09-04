import { Grid } from '@mui/material';
import { useEffect } from 'react';
import { Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import NavBar from '../components/NavBar';

type Props = {};

const CommonPage = (props: Props) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  useEffect(() => {
    if (location.pathname === '/') {
      navigate('/home');
    }
  }, [location.pathname, navigate, id]);

  return (
    <>
      <Grid container alignItems="stretch">
        <Grid xs={12} md={12} lg={12} xl={12} sm={12} item>
          <NavBar />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          xl={12}
          sm={12}
          height="100%"
          maxHeight="100vh"
        >
          <Outlet />
        </Grid>
      </Grid>
    </>
  );
};

export default CommonPage;

import styled from '@emotion/styled';
import {
  AppBar,
  Avatar,
  Button,
  CircularProgress,
  // IconButton,
  // Menu,
  // MenuItem,
  // Stack,
  Autocomplete,
  Toolbar,
} from '@mui/material';
// import { colors } from '../../globalStyles';
const buttonMargin = '10px';
// const buttonPadding = '20px';
export const styles = {
  appBar: styled(AppBar)``,
  toolbar: styled(Toolbar)``,
  menuContainer: styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
  logo: styled('img')`
    width: 30px;
    width: 100px;
  `,
  logoButton: styled(Button)``,
  rightMenu: styled('div')`
    display: flex;
  `,
  autoComplete: styled(Autocomplete)`
    margin: ${buttonMargin};

    width: 200px;
  `,
  circularProgress: styled(CircularProgress)``,
  avatar: styled(Avatar)`
    width: 40;
    height: 40;
    background-color: #d4cfe6;
    color: #463380;
    cursor: pointer;
    margin-left: 10px;
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 0 10px rgba(31, 93, 102, 0.8);
    }
  `,
  navbarButton: styled(Button)`
    text-transform: none;
    transition: color 0.3s;

    &:hover {
    }
    &:hover:after {
      transform: scaleX(1);
      transform-origin: bottom left;
    }
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      transform: scaleX(0);
      height: 2px;
      bottom: 0;
      left: 0;
    }
  `,
  loginButton: styled(Button)`
    margin: ${buttonMargin};
  `,
};

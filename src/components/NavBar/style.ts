import styled from '@emotion/styled';

import AppBar from '@mui/material/AppBar';

import Autocomplete from '@mui/material/Autocomplete';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
export const styles = {
  outerContainer: styled('div')`
    width: 100%;
  `,

  appBar: styled(AppBar)`
    border-radius: 10px;
    background-color: white;
  `,

  toolBar: styled(Toolbar)`
    /* margin: 0 auto; */
  `,
  button: styled(Button)``,
  webContainer: styled(Box)`
    display: flex;
    width: 100%;
    /* border: 1px solid red; */
    justify-content: space-between;
    align-items: center;
  `,
  logo: styled('div')`
    width: 10%;
  `,
  unOrderList: styled('ul')`
    display: flex;
    /* width: 30%; */
    align-items: center;
    justify-content: space-between;
  `,
  orderLst: styled('li')`
    padding-right: 5px;
  `,
  autoComplete: styled(Autocomplete)`
    padding: 1px;
  `,
};

import React, { useEffect, useReducer, useState } from 'react';
import { styles } from './style';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { searchMovieByName } from '../../utils/Api.services';
// import { movieName } from '../../utils/Api.services';
type MovieDropDownType = {
  poster_path: string;
  title: string;
  original_language: string;
};
interface CountryType {
  code: string;
  label: string;
  phone: string;
  suggested?: boolean;
}
const countries: readonly CountryType[] = [
  { code: 'AD', label: 'Andorra', phone: '376' },
  {
    code: 'AE',
    label: 'United Arab Emirates',
    phone: '971',
  },
];

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));

  interface CategoryState {
    selectedCategory: string;
  }

  type CategoryAction = { type: 'SELECT_MOVIES' } | { type: 'SELECT_TV_SHOWS' };

  const initialState = {
    selectedCategory: '', // Initial selected category
  };

  const categoryReducer = (
    state: CategoryState,
    action: CategoryAction
  ): CategoryState => {
    switch (action.type) {
      case 'SELECT_MOVIES':
        return { selectedCategory: 'Movies' };
      case 'SELECT_TV_SHOWS':
        return { selectedCategory: 'TV Shows' };
      default:
        return state;
    }
  };
  // Add the useReducer hook here
  const [state, dispatch] = useReducer(categoryReducer, initialState);

  // Function to handle the click on the "Movies" button
  const handleMoviesClick = () => {
    dispatch({ type: 'SELECT_MOVIES' });
  };

  // Function to handle the click on the "TV Shows" button
  const handleTvShowsClick = () => {
    dispatch({ type: 'SELECT_TV_SHOWS' });
  };

  useEffect(() => {
    searchMovieByName('ok');
    // fetchTitle();
  }, []);

  return (
    <>
      <styles.outerContainer className="outerContainer">
        <styles.appBar className="appBar">
          <styles.toolBar className="toolBar">
            {isMobile ? (
              <>
                <div>
                  <styles.button variant="contained">logo</styles.button>
                </div>
                <div></div>
              </>
            ) : (
              <>
                <styles.webContainer>
                  <styles.logo>
                    <styles.button variant="contained">logo</styles.button>
                  </styles.logo>
                  <styles.unOrderList>
                    <styles.orderLst>
                      <styles.orderLst>
                        <Autocomplete
                          id="country-select-demo"
                          sx={{ width: 300 }}
                          options={countries}
                          autoHighlight
                          getOptionLabel={(option) => option.label}
                          renderOption={(props, option) => (
                            <Box
                              component="li"
                              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              <img
                                loading="lazy"
                                width="20"
                                // src={`https://image.tmdb.org/t/p/w220_and_h330_face${option.poster_path}`}
                                alt=""
                              />
                              {option.label}
                            </Box>
                          )}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Choose a country"
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password', // disable autocomplete and autofill
                              }}
                            />
                          )}
                        />
                      </styles.orderLst>
                    </styles.orderLst>{' '}
                    <styles.orderLst>
                      <styles.button variant="contained">about</styles.button>
                    </styles.orderLst>
                    <styles.orderLst>
                      <styles.button
                        variant="contained"
                        onClick={handleMoviesClick}
                      >
                        Movies{' '}
                      </styles.button>
                    </styles.orderLst>
                    <styles.orderLst>
                      <styles.button
                        variant="contained"
                        onClick={handleTvShowsClick}
                      >
                        Tv Shows
                      </styles.button>
                    </styles.orderLst>
                  </styles.unOrderList>
                </styles.webContainer>
              </>
            )}
          </styles.toolBar>
        </styles.appBar>
      </styles.outerContainer>
    </>
  );
};

export default NavBar;

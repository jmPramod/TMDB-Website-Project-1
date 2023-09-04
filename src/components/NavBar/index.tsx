import React, { useEffect, useReducer } from 'react';
import { SyntheticEvent } from 'react';
import { styles } from './style';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {
  AutocompleteChangeReason,
  AutocompleteChangeDetails,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import CircularProgress from '@mui/material/CircularProgress';
import Autocomplete from '@mui/material/Autocomplete';
import { useTheme } from '@mui/material/styles';
import { useMediaQuery } from '@mui/material';
import { searchMovieByName } from '../../utils/Api.services';

type MovieDropDownType = {
  poster_path: string;
  title: string;
  original_language: string;
};

const NavBar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down(700));

  interface CategoryState {
    selectedCategory: string;
    autocompleteValue: string;
    extractedData: MovieDropDownType[]; // Add extractedData to the state
    isLoading: boolean;
  }

  // Define your actions
  type CategoryAction =
    | { type: 'SELECT_MOVIES' }
    | { type: 'SELECT_TV_SHOWS' }
    | { type: 'SET_AUTOCOMPLETE_VALUE'; value: string }
    | { type: 'SET_EXTRACTED_DATA'; data: MovieDropDownType[] }
    | { type: 'START_LOADING' }
    | { type: 'STOP_LOADING' }; // Action to set extractedData

  const initialState = {
    selectedCategory: '', // Initial selected category
    autocompleteValue: '', // Initial value for Autocomplete
    extractedData: [], // Initial extractedData as an empty array
    isLoading: false,
  };

  const categoryReducer = (
    state: CategoryState,
    action: CategoryAction
  ): CategoryState => {
    switch (action.type) {
      case 'SELECT_MOVIES':
        return { ...state, selectedCategory: 'Movies' };
      case 'SELECT_TV_SHOWS':
        return { ...state, selectedCategory: 'TV Shows' };
      case 'SET_AUTOCOMPLETE_VALUE':
        return { ...state, autocompleteValue: action.value };
      case 'SET_EXTRACTED_DATA':
        return { ...state, extractedData: action.data };
      case 'START_LOADING':
        return { ...state, isLoading: true };
      case 'STOP_LOADING':
        return { ...state, isLoading: false };
      default:
        return state;
    }
  };

  const handleAutocompleteChange = (
    event: SyntheticEvent<Element, Event>,
    value: string | MovieDropDownType | null,
    reason: AutocompleteChangeReason,
    details?: AutocompleteChangeDetails<any> | undefined
  ) => {
    if (value) {
      if (typeof value === 'string') {
        dispatch({ type: 'SET_AUTOCOMPLETE_VALUE', value });
      } else {
        const label = value.title;
        dispatch({ type: 'SET_AUTOCOMPLETE_VALUE', value: label });
      }
    } else {
      dispatch({ type: 'SET_AUTOCOMPLETE_VALUE', value: '' });
    }
  };

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
    const fetchDropdown = async () => {
      dispatch({ type: 'START_LOADING' });

      const res = await searchMovieByName(state.autocompleteValue);
      const { results } = res;

      const extractedData = results.map((result: MovieDropDownType) => ({
        poster_path: result.poster_path || '',
        title: result.title || '',
        original_language: result.original_language || '',
      }));

      // Reverse the extractedData array before setting it in the state
      const reversedData = [...extractedData].reverse();

      // Set the reversed data in the state
      dispatch({ type: 'SET_EXTRACTED_DATA', data: reversedData });
      setTimeout(() => {
        dispatch({ type: 'STOP_LOADING' });
      }, 1000);
    };
    if (state.autocompleteValue.trim() !== '') {
      fetchDropdown();
    }
  }, [state.autocompleteValue]);

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
                          options={state.extractedData} // Use extractedData from state
                          autoHighlight
                          getOptionLabel={(
                            option: string | MovieDropDownType
                          ) => {
                            if (typeof option === 'string') {
                              return option;
                            } else {
                              return option.title;
                            }
                          }}
                          onChange={handleAutocompleteChange}
                          size="small"
                          inputValue={state.autocompleteValue}
                          onInputChange={(event: any, newInputValue: any) => {
                            dispatch({
                              type: 'SET_AUTOCOMPLETE_VALUE',
                              value: newInputValue,
                            });
                          }}
                          renderOption={(
                            props: any,
                            option: MovieDropDownType
                          ) => (
                            <Box
                              component="li"
                              sx={{ '& > img': { mr: 2, flexShrink: 0 } }}
                              {...props}
                            >
                              <img
                                loading="lazy"
                                width="20"
                                src={`https://image.tmdb.org/t/p/w220_and_h330_face${option.poster_path}`}
                                alt=""
                              />
                              {option.title}
                            </Box>
                          )}
                          renderInput={(params: any) => (
                            <TextField
                              {...params}
                              label="Choose a movie"
                              InputProps={{
                                ...params.InputProps,
                                endAdornment: (
                                  <>
                                    {state.isLoading ? (
                                      <CircularProgress
                                        color="inherit"
                                        size={20}
                                      />
                                    ) : state.autocompleteValue ? (
                                      <ClearIcon
                                        onClick={() => {
                                          dispatch({
                                            type: 'SET_AUTOCOMPLETE_VALUE',
                                            value: '',
                                          });
                                        }}
                                        style={{ cursor: 'pointer' }}
                                      />
                                    ) : (
                                      <SearchIcon
                                        fontSize="small"
                                        style={{ marginLeft: 8 }}
                                      />
                                    )}
                                  </>
                                ),
                              }}
                              inputProps={{
                                ...params.inputProps,
                                autoComplete: 'new-password',
                              }}
                            />
                          )}
                          freeSolo
                        />
                      </styles.orderLst>
                    </styles.orderLst>
                    <styles.orderLst>
                      <styles.button variant="contained">about</styles.button>
                    </styles.orderLst>
                    <styles.orderLst>
                      <styles.button
                        variant="contained"
                        onClick={handleMoviesClick}
                      >
                        Movies
                      </styles.button>
                    </styles.orderLst>
                    <styles.orderLst>
                      <styles.button
                        variant="contained"
                        onClick={handleTvShowsClick}
                      >
                        TV Shows
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

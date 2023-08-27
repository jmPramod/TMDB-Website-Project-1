import {
  // AppBar,
  Autocomplete,
  Avatar,
  Button,
  TextField,
  // Toolbar,
} from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';

import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { styles } from './styles';
const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [primaryColor, setPrimaryColor] = useState('rgba(0, 0, 0, 0)'); // Use transparent format
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Add state to track login status

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };
  const location = useLocation();

  const mobTheme = useTheme();
  const mobile = useMediaQuery(mobTheme.breakpoints.down('md'));
  const top100Films = [
    { label: 'The Shawshank Redemption', year: 1994 },
    { label: 'The Godfather', year: 1972 },
    { label: 'The Godfather: Part II', year: 1974 },
    { label: 'The Dark Knight', year: 2008 },
    { label: '12 Angry Men', year: 1957 },
    { label: "Schindler's List", year: 1993 },
    { label: 'Pulp Fiction', year: 1994 },
    {
      label: 'The Lord of the Rings: The Return of the King',
      year: 2003,
    },
    { label: 'The Good, the Bad and the Ugly', year: 1966 },
    { label: 'Fight Club', year: 1999 },
    {
      label: 'The Lord of the Rings: The Fellowship of the Ring',
      year: 2001,
    },
    {
      label: 'Star Wars: Episode V - The Empire Strikes Back',
      year: 1980,
    },
    { label: 'Forrest Gump', year: 1994 },
    { label: 'Inception', year: 2010 },
    {
      label: 'The Lord of the Rings: The Two Towers',
      year: 2002,
    },
    { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
    { label: 'Goodfellas', year: 1990 },
    { label: 'The Matrix', year: 1999 },
    { label: 'Seven Samurai', year: 1954 },
    {
      label: 'Star Wars: Episode IV - A New Hope',
      year: 1977,
    },
    { label: 'City of God', year: 2002 },
    { label: 'Se7en', year: 1995 },
    { label: 'The Silence of the Lambs', year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: 'Life Is Beautiful', year: 1997 },
    { label: 'The Usual Suspects', year: 1995 },
    { label: 'Léon: The Professional', year: 1994 },
    { label: 'Spirited Away', year: 2001 },
    { label: 'Saving Private Ryan', year: 1998 },
    { label: 'Once Upon a Time in the West', year: 1968 },
    { label: 'American History X', year: 1998 },
    { label: 'Interstellar', year: 2014 },
    { label: 'Casablanca', year: 1942 },
    { label: 'City Lights', year: 1931 },
    { label: 'Psycho', year: 1960 },
    { label: 'The Green Mile', year: 1999 },
    { label: 'The Intouchables', year: 2011 },
    { label: 'Modern Times', year: 1936 },
    { label: 'Raiders of the Lost Ark', year: 1981 },
    { label: 'Rear Window', year: 1954 },
    { label: 'The Pianist', year: 2002 },
    { label: 'The Departed', year: 2006 },
    { label: 'Terminator 2: Judgment Day', year: 1991 },
    { label: 'Back to the Future', year: 1985 },
    { label: 'Whiplash', year: 2014 },
    { label: 'Gladiator', year: 2000 },
    { label: 'Memento', year: 2000 },
    { label: 'The Prestige', year: 2006 },
    { label: 'The Lion King', year: 1994 },
    { label: 'Apocalypse Now', year: 1979 },
    { label: 'Alien', year: 1979 },
    { label: 'Sunset Boulevard', year: 1950 },
    {
      label:
        'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
      year: 1964,
    },
    { label: 'The Great Dictator', year: 1940 },
    { label: 'Cinema Paradiso', year: 1988 },
    { label: 'The Lives of Others', year: 2006 },
    { label: 'Grave of the Fireflies', year: 1988 },
    { label: 'Paths of Glory', year: 1957 },
    { label: 'Django Unchained', year: 2012 },
    { label: 'The Shining', year: 1980 },
    { label: 'WALL·E', year: 2008 },
    { label: 'American Beauty', year: 1999 },
    { label: 'The Dark Knight Rises', year: 2012 },
    { label: 'Princess Mononoke', year: 1997 },
    { label: 'Aliens', year: 1986 },
    { label: 'Oldboy', year: 2003 },
    { label: 'Once Upon a Time in America', year: 1984 },
    { label: 'Witness for the Prosecution', year: 1957 },
    { label: 'Das Boot', year: 1981 },
    { label: 'Citizen Kane', year: 1941 },
    { label: 'North by Northwest', year: 1959 },
    { label: 'Vertigo', year: 1958 },
    {
      label: 'Star Wars: Episode VI - Return of the Jedi',
      year: 1983,
    },
    { label: 'Reservoir Dogs', year: 1992 },
    { label: 'Braveheart', year: 1995 },
    { label: 'M', year: 1931 },
    { label: 'Requiem for a Dream', year: 2000 },
    { label: 'Amélie', year: 2001 },
    { label: 'A Clockwork Orange', year: 1971 },
    { label: 'Like Stars on Earth', year: 2007 },
    { label: 'Taxi Driver', year: 1976 },
    { label: 'Lawrence of Arabia', year: 1962 },
    { label: 'Double Indemnity', year: 1944 },
    {
      label: 'Eternal Sunshine of the Spotless Mind',
      year: 2004,
    },
    { label: 'Amadeus', year: 1984 },
    { label: 'To Kill a Mockingbird', year: 1962 },
    { label: 'Toy Story 3', year: 2010 },
    { label: 'Logan', year: 2017 },
    { label: 'Full Metal Jacket', year: 1987 },
    { label: 'Dangal', year: 2016 },
    { label: 'The Sting', year: 1973 },
    { label: '2001: A Space Odyssey', year: 1968 },
    { label: "Singin' in the Rain", year: 1952 },
    { label: 'Toy Story', year: 1995 },
    { label: 'Bicycle Thieves', year: 1948 },
    { label: 'The Kid', year: 1921 },
    { label: 'Inglourious Basterds', year: 2009 },
    { label: 'Snatch', year: 2000 },
    { label: '3 Idiots', year: 2009 },
    { label: 'Monty Python and the Holy Grail', year: 1975 },
  ];
  useEffect(() => {
    switch (location.pathname) {
      case '/':
        setPrimaryColor('#FFFFFF'); // Use transparent format
        break;

      default:
        setPrimaryColor('rgba(0, 0, 0, 0)');
    }
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= window.innerHeight * 0.4) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Your existing useEffect for location

    // Check if the user is logged in here (you need to implement this logic)
    // For example, you might have an authentication context that provides login status
    // Replace the following line with your actual logic
    // const userIsLoggedIn = checkUserLoggedIn();

    setIsLoggedIn(true);
  }, [location.pathname]);
  const theme = createTheme({
    palette: {
      primary: {
        main: primaryColor,
      },
      background: {
        default: scrolled ? '#FFFFFF' : 'transparent',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <styles.appBar position="fixed">
        <styles.toolbar variant="dense">
          {mobile ? (
            <>
              <styles.logoButton
                color="error"
                variant="text"
                startIcon={<MenuIcon />}
                disableRipple
                onClick={toggleDrawer}
              >
                I❤M
              </styles.logoButton>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Movie" />
                )}
              />
              {isLoggedIn && false ? ( // Render avatar if logged in
                <Avatar
                  src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/07/movie-websites-templates-1000x750.jpg"
                  alt="Avatar"
                />
              ) : (
                // Render sign-up or logo if not logged in
                <Button color="error" variant="text">
                  Sign Up
                </Button>
              )}
            </>
          ) : (
            <styles.menuContainer>
              <styles.logo src={'/image/LogoName.png'} />
              <styles.rightMenu>
                <styles.autoComplete
                  disablePortal
                  size="small"
                  id="combo-box-demo"
                  options={top100Films}
                  renderInput={(params) => (
                    <TextField {...params} label="Movie" />
                  )}
                />
                {
                  // login
                  false ? (
                    <Avatar
                      src="https://149842033.v2.pressablecdn.com/wp-content/uploads/2020/07/movie-websites-templates-1000x750.jpg"
                      alt="Avatar"
                    />
                  ) : (
                    <>
                      <styles.loginButton
                        color="error"
                        size="small"
                        variant="outlined"
                      >
                        login
                      </styles.loginButton>
                      <styles.loginButton
                        color="error"
                        size="small"
                        variant="outlined"
                      >
                        Sign Up
                      </styles.loginButton>
                    </>
                  )
                }
              </styles.rightMenu>
            </styles.menuContainer>
          )}
        </styles.toolbar>
      </styles.appBar>
    </ThemeProvider>
  );
};

export default NavBar;

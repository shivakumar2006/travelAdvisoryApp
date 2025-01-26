import React from 'react';
import { AppBar, Toolbar, Typography, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        {/* Left: Travel Advisor */}
        <Typography variant="h5" className={classes.title}>
          Travel Advisor
        </Typography>

        {/* Right: Explore New Places and Search Bar */}
        <Box display="flex" alignItems="center">
          <Typography variant="h6" className={classes.title} style={{ marginRight: '16px' }}>
            Explore New Places
          </Typography>

          {/* Search Bar */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search..."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

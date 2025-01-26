import React from 'react';
import { CssBaseline, Grid } from '@mui/material'; // Use Grid instead of Grid2
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
import { ThemeProvider, createTheme } from '@mui/material/styles'; // Add ThemeProvider

// Define your theme (optional)
const theme = createTheme();

const App = () => {
  return (
    <ThemeProvider theme={theme}> {/* Wrap the app with ThemeProvider */}
      <CssBaseline />
      <Header />
      <Grid container spacing={3} style={{ width: '100%' }}>
        <Grid item xs={12} mb={4}>
          <List />
        </Grid>
        <Grid item xs={12} mb={8}>
          <Map />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
};

export default App;

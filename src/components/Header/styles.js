import { alpha } from '@mui/system';
import { makeStyles } from '@mui/styles';


export default makeStyles((theme) => ({
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
      color: theme.palette.common.white, // Match the placeholder color
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginLeft: theme.spacing(3),
      width: 'auto',
      display: 'flex',
      alignItems: 'center',
    },
    searchIcon: {
      color: theme.palette.common.white, // Matches Travel Advisor color
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginLeft: theme.spacing(1), // Left padding inside the search bar
    },
    inputRoot: {
      color: theme.palette.common.white, // Matches Travel Advisor color
      display: 'flex',
      alignItems: 'center',
      marginLeft: theme.spacing(1), // Ensure placeholder doesn't overlap with the icon
      width: '100%',
    },
    inputInput: {
      color: theme.palette.common.white, // Matches the text color
      padding: theme.spacing(1, 1, 1, 5), // Ensures padding leaves space for the icon
      transition: theme.transitions.create('width'),
      '&::placeholder': {
        color: theme.palette.common.white, // Placeholder color matches Travel Advisor
      },
      width: '20ch', // Fixed width
      [theme.breakpoints.up('sm')]: {
        width: '20ch',
      },
    },
    toolbar: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
    },
  }));
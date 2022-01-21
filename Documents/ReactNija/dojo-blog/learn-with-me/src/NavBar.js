
// Importing files from Material-UI
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
//import MenuIcon from '@material-ui/icons/Menu';
import { Box, Link } from '@material-ui/core';
//import { tab } from '@testing-library/user-event/dist/tab';

// Using Inline Styling
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  menuBox:{
    
position: 'absolute',
width: '104px',
height: '38px',

top: '10px',
fontFamily: 'Mulish',
fontStyle: 'normal',
fontWeight: 'normal',
fontSize: '24px',
lineHeight: '30px',
display: 'flex',
alignItems: 'center',
textAlign: 'center',
color: '#000000',
  },

}));

const NavBar = () => {
  const classes = useStyles();
  return ( 
    <div className={classes.root}>
      <AppBar position="static" color="">
        <Toolbar variant="regular">
          <IconButton edge="start" 
            className={classes.menuButton} 
            color="inherit" aria-label="menu">
            
          </IconButton>
          <Typography variant="h6" color="inherit">
            <p
              style={{
                 /* Learn with me */
                  position: 'absolute',
                  width: '213px',
                  height: '38px',
                  left: '72px',
                  top: '7px',
                  color :'#E5E5E5',
    backgroundColor :'#0F766E',
    padding : '8px',
    borderRadius: '9px',

                  fontFamily: 'bold',
                  fontStyle: 'normal',
                  fontWeight: 'normal',
                  fontSize: '30px',
                  lineHeight: '30px',
                  display: 'flex', 
                  alignItems: 'center',
              }}
            >Learn with me</p>
            
            <Link to="/"  underline="hover"
            className={classes.menuBox} variant ="body2"
            style={{left: '611px',
          }}
            >Home</Link>
            <Link to="/Courses" className={classes.menuBox} style={{left: '773px',}}  underline="hover"
            >Courses</Link>
            <Link to="/CareerAdvice" className={classes.menuBox} style={{left: '907px',}}  underline="hover"
            >Advice</Link>
            <Link to="/Register" className={classes.menuBox} style={{left: '1064px',}}  underline="hover"
            >Register</Link>
            
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
   );
}
 
export default NavBar;
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home';
import Courses from './Courses';
import { ThemeProvider } from '@material-ui/core/';
import { createTheme } from '@material-ui/core';

const theme = createTheme({
  // palette : {
  //   primary : {                           
  //     main : '#fefefe'
  //   },
  //   secondary : purple
  // },
  
    palette: {
      primary: {
        main: '#49a879',
      },
      secondary: {
        main: '#fbc02d',
      },
    },
  
 typography : {
    fontFamily : 'Quicksand',
    fontWeightLight : 400,
    fontWeightMedium : 500,
    fontWeightBold :700,
    fontWeightRegular : 600,
 }
})

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar/>
      <Router>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/Courses">
          <Courses/>
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
    // <div className="App">
    // </div>
  );
}

export default App;

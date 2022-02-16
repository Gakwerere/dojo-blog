import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import { BrowserRouter as Router ,Route ,Switch } from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import SideBar from '../src/SideBar/SideBar'

function App() {
  const name = "Rwanda";
  const number = 40 ;
  const array = [1,2,33,4];
  const link1 = "http://www.techaffinity.com"
  return (
    <Router>
      <div className="App">
      <SideBar/>
      <Navbar/>
      
      <div className="content">
       <Switch>
         <Route exact path="/">
            <Home/>
         </Route>
         <Route path="/Create">
           <Create />
         </Route>
         <Route path="/blogs/:id">
           <BlogDetails />
         </Route>
         <Route path="*">
           <NotFound/>
         </Route>
       </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
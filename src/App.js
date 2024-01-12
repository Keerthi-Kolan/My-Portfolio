import About from './About';
import Navbar from './Navbar';
import {HashRouter as Router,Route,Switch} from 'react-router-dom';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
import NotFound from './NotFound.js';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className='content'>
      <Switch>
        <Route exact path="/">
            <About/>
        </Route>
        <Route path="/Education">
          <Education/>
        </Route>
        <Route path="/Projects">
          <Projects/>
        </Route>
        <Route path="/Contact">
          <Contact/>
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

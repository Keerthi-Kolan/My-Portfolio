import './App.css';
import About from './About';
import Navbar from './Navbar';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Education from './Education';
import Projects from './Projects';
import Contact from './Contact';
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <p>Unable to display the content</p>
      <div className='content'>
      <Switch>
        <Route path="/">
            <About/>
        </Route>
        <Route path="/Education.js">
          <Education/>
        </Route>
        <Route path="/Projects.js">
          <Projects/>
        </Route>
        <Route path="/Contact.js">
          <Contact/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;

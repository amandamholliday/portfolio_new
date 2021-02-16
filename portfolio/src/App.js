import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navy from './Components/Nav';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
      <Navy />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    </Router>

  );
}

const Home = () => (
  <div>
    <h1>Home!</h1>
  </div>
);

export default App;

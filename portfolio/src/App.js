import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './Components/About';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Navy from './Components/Nav';
import Wireframes from './Components/Wireframes';
import './App.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';

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
          <Route path="/wireframes" component={Wireframes} />
        </Switch>
      </div>
    </Router>

  );
}

const Home = () => (
  <div className="home">
      <Container>
        <img src="https://see.fontimg.com/api/renderfont4/pALD/eyJyIjoiZnMiLCJoIjoxNTgsInciOjEwMDAsImZzIjoxNTgsImZnYyI6IiMzQTM4MzgiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/QW1hbmRh/wonderbar.png"/>
        <img src="https://see.fontimg.com/api/renderfont4/pALD/eyJyIjoiZnMiLCJoIjoxNTgsInciOjEwMDAsImZzIjoxNTgsImZnYyI6IiMzQTM4MzgiLCJiZ2MiOiIjRkZGRkZGIiwidCI6MX0/SG9sbGlkYXk/wonderbar.png"/>
        <br />
        <br />
        <p>
          WEB DEVELOPER / SOFTWARE ENGINEER / WIREFRAME DESIGNER
        </p>
      </Container>
  </div>
);

export default App;

import './App.css';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Global from './Global.js';
import Indonesia from './Indonesia.js';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Covid Tracker</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href=".">Global</Nav.Link>
              <Nav.Link href="/indonesia">Indonesia</Nav.Link>
              <Nav.Link href="/provinsi">Provinsi</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Switch>
          <Route exact path="/" component={Global} />
          <Route exact path="/indonesia" component={Indonesia}/>
          <Route exact path="/provinsi" component={Provinsi}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

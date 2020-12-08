import './App.css';
import { Switch, Route, BrowserRouter} from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function App() {
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
      </BrowserRouter>
    </div>
  );
}

export default App;

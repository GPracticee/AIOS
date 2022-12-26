import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from "react-bootstrap/Navbar"
import Container from "react-bootstrap/Container"
import { LinkContainer } from "react-router-bootstrap"

function App() {
  return (
    <>
      <Router>
        <div className='d-flex flex-column site-container'>
          <header>
            <Navbar bg="dark" variant='dark'>
              <Container>
                <LinkContainer to="/">
                  <Navbar.Brand>AIOS</Navbar.Brand>
                </LinkContainer>
              </Container>
            </Navbar>

          </header>
          <main>
            <Container className='mt-3'>
              <Routes>
                <Route path='/' element={<HomeScreen />}></Route>
                <Route path='/product/:slug' element={<ProductScreen />}></Route>
              </Routes>
            </Container>
          </main>
          <footer>
            <div className='text-center'>
              this is footer
            </div>
          </footer>
        </div>
      </Router>
    </>
  );
}

export default App;

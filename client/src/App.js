import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import Container from "react-bootstrap/Container"
import { LinkContainer } from "react-router-bootstrap"
import Badge from 'react-bootstrap/esm/Badge';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { Store } from './Store';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SignInScreen';

function App() {
  const {state} = useContext(Store)
  const {cart} = state
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
                <Nav className='me-auto'>
                <Link to="/cart" className="nav-link">
                  Cart
                  {cart.cartItems.length>0 && (
                    <Badge pill bg="danger">
                      {cart.cartItems.reduce((a,c) => a+c.quantity,0)}
                    </Badge>
                  )}
                </Link>

                </Nav>
              </Container>
            </Navbar>

          </header>
          <main>
            <Container className='mt-3'>
              <Routes>
                <Route path='/' element={<HomeScreen />}></Route>
                <Route path='/product/:slug' element={<ProductScreen />}></Route>
                <Route path='/cart' element={<CartScreen />}></Route>
                <Route path='/signin' element={<SigninScreen />}></Route>
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

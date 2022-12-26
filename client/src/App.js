import './App.css';
import {BrowserRouter as Router ,Routes,Route, Link} from "react-router-dom"
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
    <Router>
      <header>
        <Link to="/">AIOS</Link>
      </header>
      <main>
      <Routes>
        <Route path='/' element={<HomeScreen />}></Route>
        <Route path='/product/:slug' element={<ProductScreen />}></Route>
      </Routes>
     
      </main>
      </Router>
    </>
  );
}

export default App;

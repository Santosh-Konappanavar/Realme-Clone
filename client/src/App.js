import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './Pages/Category';
import Product from './Pages/Product';
import ErrorPage from './Pages/ErrorPage';

function App() {
  return (
    <div className="App">
     <nav>
     <Link to="/">Home page</Link>
      <Link to="/category">Category</Link>
      <Link to="/product">Product</Link>
     </nav>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/category" element={ <Category/> } />
        <Route path="/product" element={ <Product/> } />
        <Route path="*" element={ <ErrorPage/> } />
      </Routes>
    </div>
  );
}

export default App;

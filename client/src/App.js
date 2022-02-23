import './App.css';
import { Link } from 'react-router-dom';
import RoutesContainer from './Routes'

function App() {
  return (
    <div className="App">
     <nav>
     <Link to="/">Home page</Link>
      <Link to="/category">Category</Link>
      <Link to="/product">Product</Link>
     </nav>
        <RoutesContainer />
    </div>
  );
}

export default App;

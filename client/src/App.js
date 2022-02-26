import './App.css';
import { Link } from 'react-router-dom';
import RoutesContainer from './Routes'

function App() {
  return (
    <div className="App">
     <nav>
     <Link to="/">Home page</Link>
      <Link to="/category">Category</Link>
      <Link to="/Product"></Link>
      <Link to="/Product/:id"></Link>
      <Link to="/Cart"></Link>
     </nav>
        <RoutesContainer />
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MockAPI from './MockAPI';
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/home/Home';

function App() {
  return (
    <div className="App">
      <h1>Celestial Web - Social Media App</h1>
      {/* <MockAPI /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

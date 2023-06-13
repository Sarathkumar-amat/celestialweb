import logo from './logo.svg';
import './App.css';
import MockAPI from './MockAPI';
import {Routes,Route} from "react-router-dom"
import { Home } from './features/home/Home';
import { Login } from './features/authentication/authPages/Login';


function App() {
  return (
    <div className="App">
      <h1>Celestial Web - Social Media App</h1>
      <MockAPI />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;

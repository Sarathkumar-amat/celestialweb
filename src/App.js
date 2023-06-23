import logo from './logo.svg';
import './App.css';
import MockAPI from './MockAPI';
import {Routes,Route} from "react-router-dom"
import { Home } from './features/home/Home';
import { Login } from './features/authentication/authPages/Login';
import { Profile } from './features/profile/Profile';
import RequiresAuth from './features/authentication/RequiresAuth';


function App() {
  return (
    <div className="App">
      <h1>Celestial Web - Social Media App</h1>
      {/* <MockAPI /> */}
      <Routes>

        <Route path="/" element={<RequiresAuth><Home /> </RequiresAuth>} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

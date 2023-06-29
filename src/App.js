import logo from './logo.svg';
import './App.css';
import MockAPI from './MockAPI';
import {Routes,Route} from "react-router-dom"
import { Home } from './features/home/Home';
import { Login } from './features/authentication/authPages/Login';
import { Profile } from './features/profile/Profile';
import RequiresAuth from './features/authentication/RequiresAuth';
import { AllUsers } from './features/home/Suggestions/AllUsers';
import { IndividualProfile } from './features/IndividualProfile/IndividualProfile';
import { SideBar } from './features/sidebar/SideBar';
import { NavBar } from './features/navBar/NavBar';
import { Explore } from './features/explore/Explore';


function App() {
  const token = localStorage.getItem("token");
  // console.log(token);
  return (
    <div className="App">
      {/* <h1>Celestial Web - Social Media App</h1> */}
      {/* <MockAPI /> */}
      <NavBar/>
     <div className="allComponents">
          <RequiresAuth><SideBar /></RequiresAuth>
          <Routes>
            <Route path="/" element={<RequiresAuth><Home /> </RequiresAuth>} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/userProfile/:userName" element={<IndividualProfile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <RequiresAuth><AllUsers /> </RequiresAuth>
      </div>
      
     
     {/* {token &&  <AllUsers /> } */}
    </div>
  );
}

export default App;

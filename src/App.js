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
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { BookMarks } from './features/bookMarks/BookMarks';
import { SignUp } from './features/authentication/authPages/SignUp';


function App() {
  const token = localStorage.getItem("token");
  // console.log(token);
  return (
    <div className="App">
      {/* <h1>Celestial Web - Social Media App</h1> */}
      {/* <MockAPI /> */}
     <RequiresAuth> <NavBar/> </RequiresAuth>
      <ToastContainer />
     <div className="allComponents">
          <RequiresAuth><SideBar /></RequiresAuth>
          <Routes>
            <Route path="/" element={<RequiresAuth><Home /> </RequiresAuth>} />
            <Route path="/profile" element={<RequiresAuth><Profile /> </RequiresAuth>} />
            <Route path="/explore" element={<RequiresAuth><Explore /> </RequiresAuth>} />
            <Route path="/bookMarks" element={<RequiresAuth><BookMarks /> </RequiresAuth>} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/userProfile/:userName" element={<RequiresAuth><IndividualProfile /> </RequiresAuth>} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <RequiresAuth><AllUsers /> </RequiresAuth>
      </div>
      
     
     {/* {token &&  <AllUsers /> } */}
    </div>
  );
}

export default App;

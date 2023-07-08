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
import { ContentBox } from './components/ContentBox';


function App() {
  const token = localStorage.getItem("token");
  // console.log(token);
  return (
    <div className="App">
      {/* <h1>Celestial Web - Social Media App</h1> */}
      {/* <MockAPI /> */}
   {/* {token && <NavBar/> } */}
      <ToastContainer />
     <div className="allComponents">
          
          <Routes>
            <Route path="/" element={<RequiresAuth><ContentBox><Home /></ContentBox></RequiresAuth> } />
            <Route path="/profile" element={<RequiresAuth><ContentBox><Profile /></ContentBox></RequiresAuth> } />
            <Route path="/explore" element={<RequiresAuth><ContentBox><Explore /></ContentBox></RequiresAuth> } />
            <Route path="/bookMarks" element={<RequiresAuth><ContentBox><BookMarks /></ContentBox></RequiresAuth> } />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/userProfile/:userName" element={<RequiresAuth><ContentBox><IndividualProfile /></ContentBox></RequiresAuth>} />
            <Route path="/login" element={<Login />} />
          </Routes>
        
      </div>
      
     
     {/* {token &&  <AllUsers /> } */}
    </div>
  );
}

export default App;

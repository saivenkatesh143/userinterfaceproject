import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LOGIN from './components/pages/Loginforms.js';
import Registerform from './components/pages/Registerform.js';
import About from './components/pages/About.js';
import Navigation from './components/pages/Navigation.js';
import Profile from './components/pages/Profile.js';
function App() {
  return (
    <div className="App">
              <BrowserRouter>
          <Routes>
          <Route path='/' element={ <Navigation />}>
          <Route path="about" element={<About />}/>
             
              <Route path="login" element={<LOGIN />}/>
              
              <Route path="register" element={<Registerform />}/>

              <Route path="profile" element={<Profile />}/>
              </Route>

          </Routes>
        </BrowserRouter>  
       
    </div>
  );
}

export default App;
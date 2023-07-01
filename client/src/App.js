import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loginforms from './components/pages/Loginforms.js';
import Registerform from './components/pages/Registerform.js';
import About from './components/pages/About.js';
import Navigation from './components/pages/Navigation.js';
function App() {
  return (
    <div className="App">
              <BrowserRouter>
          <Routes>
          <Route path='/' element={ <Navigation />}>
          <Route path="about" element={<About about={<About />}/>}/>
             
              <Route path="login" element={<Loginforms login={<Loginforms />}/>}/>
              
              <Route path="register" element={<Registerform />}/>
              </Route>

          </Routes>
        </BrowserRouter>  
       
    </div>
  );
}

export default App;

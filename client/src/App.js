import './App.css';
import Loginform from './components/Loginforms.js';
import Registerform from './components/Registerform.js';
import About from './components/About.js';
import Navigation from './components/Navigation.js';

function App() {
  return (
    <div className="App">
      <Navigation />
      <About />
      <h3>Please Enter the details to login</h3>
      <Loginform />
      <h3>Please enter the following details to Register</h3>
      <Registerform />      
    </div>
  );
}

export default App;

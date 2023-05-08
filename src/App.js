
import './App.css';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import FormShaktimaan from './components/FormShaktimaan';
import React, {useState} from 'react'
import About from './components/About';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  const[likh, setLikh] = useState('Dark Mode')
  const[mode, setMode] = useState('light');

  const[alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg : message,
      type : type
    })

    setTimeout(() =>{
       setAlert(null);
    }, 3000)
  }
 
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark');
      setLikh('Light Mode');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success");
      document.title="TextWalk : Dark Mode";
    }else{
      setMode('light');
      setLikh('Dark Mode');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode has been enabled", "success");
      document.title="TextWalk : Light Mode";
      // setInterval(()=>{
      //   showAlert("Your phone has virus", "Remove now");
      // }, 1000)
      // setInterval(()=>{
      //   showAlert("Install now", "Antivirus");
      // }, 1500)
    }
  }
  return (
   <>
   <Router>
    
      <Navbar title="TextWalks" mode={mode} about="About" toggleMode={toggleMode} likh={likh}/>
      <Alert alert={alert}/>
      <Routes>
          <Route path="/" element={<FormShaktimaan showAlert={showAlert} tit="Yha likho brief me" head=" Enter your text here" mode={mode}/>}>
            
      
          </Route>
          <Route path="/about" element={<About/>}>
            
          </Route>
          </Routes>
      <div className="container"> 
      </div>
      </Router>
   </>
  );
}

export default App;

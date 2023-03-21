import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React, { useState } from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";




function App() {
  const [mode, setMode] = useState('light');
  const [textColor, SetTextColor] = useState('dark');
  const [alert, setAlert] = useState(null);


  const [myStyle ,setStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
});

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    ;
    if (mode === 'light') {
      setMode('dark');
      SetTextColor('light');
      document.body.style.backgroundColor = 'grey'
      showAlert('dark mood enable', 'success');
      setStyle({
        color: 'white',
        backgroundColor: 'grey'
      });
    }
    else {
      setMode('light');
      SetTextColor('dark');
      document.body.style.backgroundColor = 'white'
      showAlert('light mood enable', 'success');
      setStyle({
        color: 'black',
        backgroundColor: 'white'
      })
    }
  }
  return (

    // <>

      // <Navbar title='TextUtils' about='About Textutils' mode ={mode} toggleMode={toggleMode} textColor={textColor}/>
    //   <Alert alert ={alert}/>
    //   {/* <Navbar /> */}
    //  <TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>
    //  {/* <About/> */}



    // </>
    <Router>
        
        <Navbar title='TextUtils' about='About Textutils' mode ={mode} toggleMode={toggleMode} textColor={textColor}/>
        <Alert alert ={alert}/>

      <Routes>


        <Route path="/about" element ={<About myStyle={myStyle}/>}/>


        <Route path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} showAlert={showAlert}/>}/>


      </Routes>


    </Router>
  );
}

export default App;

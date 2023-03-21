import React, { useState } from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {


  const handleOnChange = (event) => {
    setText(event.target.value);
  }

  const handleUppercase = () => {
    // console.log('button clicked'+text);
   
      let newText = text.toUpperCase();
      setText(newText);
      props.showAlert('Text converted to uppercase', 'success')
      // document.getElementById('exampleFormControlTextarea1').value=document.getElementById('exampleFormControlTextarea1').value.toUpperCase();
    
  }

  const handleLowecase = () => {
  
   
      let newText = text.toLowerCase();
      setText(newText);
      props.showAlert('Text converted to lowercase', 'success');
    
  }
  const handleClear = () => {
    
      let newText = '';
      setText(newText);
      props.showAlert('Text cleared', 'success');
    

  }


  const handleCopy = () => {
    

      const area = document.querySelector('.form-control')
      area.select();
      document.execCommand('copy');
      props.showAlert('Text Copied','success');

    
  }
  const [text, setText] = useState('');

  return (
    <>
      <div className="container">
        <h2 className='my-3 ' style={{
          color: props.mode === 'light' ? 'black' : 'white'
        }}>{props.heading}</h2>
        <div className="mb-3">

          <textarea className="form-control" id="exampleFormControlTextarea1" style={{
            backgroundColor: props.mode === 'light' ? 'white' : 'grey',
            color: props.mode === 'light' ? 'black' : 'white'
          }} value={text} onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary" onClick={handleUppercase}>convert to Uppercase</button>
        <button disabled={text.length===0}  className="btn btn-primary mx-2" onClick={handleLowecase}>convert to Lowercase</button>
        <button disabled={text.length===0}  className="btn btn-primary my-2" onClick={handleClear}>Clear Text</button>
        <button disabled={text.length===0}  className="btn btn-primary my-2 mx-2" onClick={handleCopy}>Copy Text</button>
        {/* <button className="btn btn-primary my-2 mx-2" onClick={handleSpace}>Clear Spaces</button> */}


      </div>

      <div className="container my-3" style={{
        color: props.mode === 'light' ? 'black' : 'white'
      }}>
        <h2>Your Text Summary</h2>
        <p>{text.length} charcters and {text.length > 0 ? text.split(" ").length - 1 : 0} words </p>
        <p>{text.length > 0 ? 0.008 * (text.split(" ").length - 1) : 0} Minutes To read</p>
        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Enter Text Above To Preview'}</p>

      </div>
    </>
  )
};

TextForm.propTypes = {
  heading: PropTypes.string
}



import llama from './llama.jpeg';
import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

function App() {
  return (
    <div style={{margin: '20px'}}>
      <header>
        <img src={llama} style={{maxHeight: '300px'}} />
      </header>

      <h1 data-testid='heading'>Hello</h1>
      <h3>How are you?</h3>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
        <p style={{color: '#D3D3D3'}}>This next link is really important and it'll change your life forever!</p>
        <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
        >
            Click here
        </a>
        <br/>

        <h4>Please add your details to the form:</h4>
      <form>
        {/*<form>*/}
          {/*<label htmlFor="fname">First name:</label><br/>*/}
          <input type="text" id="fname" name="fname" placeholder="John"/><br/>
            {/*<label htmlFor="lname">Last name:</label><br/>*/}
            <input type="text" id="lname" name="lname" placeholder="Doe" /><br/><br/>
        {/*  <input type="submit" defaultValue='Submit' onClick={() => alert('thanks')}/>*/}
        {/*</form>*/}
      </form>
        {/*<p style={{color: '#AD1C1A'}}>This next word is a <span style={{ textDecoration: 'overline'}}>*/}
        {/*    <a href='#' style={{color: '#973130', textDecoration: 'underline'}}>link</a></span></p>*/}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';

if (process.env.NODE_ENV !== 'production') {
  const axe = require('@axe-core/react');
  axe(React, ReactDOM, 1000);
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <h1 data-testid='heading'>Hello</h1>
      <h3>How is it going?</h3>
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
      >
        Learn React
      </a>

      <form>
        {/*<form>*/}
          {/*<label htmlFor="fname">First name:</label><br/>*/}
          <input type="text" id="fname" name="fname" placeholder="John"/><br/>
            {/*<label htmlFor="lname">Last name:</label><br/>*/}
            <input type="text" id="lname" name="lname" placeholder="Doe" /><br/><br/>
        {/*  <input type="submit" defaultValue='Submit' onClick={() => alert('thanks')}/>*/}
        {/*</form>*/}
      </form>
    </div>
  );
}

export default App;

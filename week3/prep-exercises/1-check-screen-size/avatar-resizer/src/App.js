import React from 'react';
import PersonByWindowSize from './components/PersonByWindowSize';
import DisplaySize from './components/DisplaySize';
import './index.css';

const App = () => {
  return (
    <div className="App">
      <h1>Responsive Avatar App</h1>
      <DisplaySize />
      <PersonByWindowSize />
      <p>
        Resize the browser to see different avatars and their randomly generated
        accessories!
      </p>
    </div>
  );
};

export default App;

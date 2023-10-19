import logo from './logo.svg';
import React from 'react';
import ColorPicker from './ColorPicker';
import './App.css';

function App() {
  return (
    <div className="App">
       <ColorPicker colors={['Red', 'Green', 'Blue','Yellow','Pink','Cyan','Orange','Violet','Darkgreen','Purple','Brown','Darkblue','Darkorange']} />
    </div>
  );
}

export default App;

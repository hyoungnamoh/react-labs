import React, {Component} from 'react';
import './App.css';
import AddNumberRoot from "./components/AddNumberRoot";
import DisplayNumberRoot from "./components/DisplayNumberRoot";



function App() {
  return (
    <div className="App">
      Hello World!
        <AddNumberRoot/>
        <DisplayNumberRoot/>
    </div>
  );
}

export default App;

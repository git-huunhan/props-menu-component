import React, { Component } from 'react';
import './App.css';
import iconHome from './components/home.png';
import iconVector from './components/vector.png';
import iconUpload from './components/upload.png';
import iconFood from './components/food.png';
import iconSettings from './components/settings.png';
import Menu from './components/Menu'

class App extends Component {
  render(){
    return (
      <div className="App">
        <div className="Menu-home">
          <div className="Icon">
                <img src={iconHome}></img> 
          </div>
          <div className="text-home">
            <p>
              Home
            </p>
          </div>
        </div>
        <Menu logoUrl={iconVector} text="deals"/>
        <Menu logoUrl={iconUpload} text="upload"/>
        <Menu logoUrl={iconFood} text="work"/>
        <Menu logoUrl={iconSettings} text="settings"/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Contenu from './components/Contenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Contenu
        myProps = {imageList}/>
      </div>
    );
  }
}

export default App;


const imageList = [{
  id: 1,
  descrip: 'image1',
  url: 'https://picsum.photos/g/200/300'
}, {
  id: 2,
  descrip: 'image2',
  url: 'https://picsum.photos/200/300?image=0'
}, {
  id: 3,
  descrip: 'image3',
  url: 'https://picsum.photos/200/300/?gravity=east'
}]



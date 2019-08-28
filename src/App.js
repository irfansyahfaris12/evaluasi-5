import React from 'react';
import Header from "./component/Header";
import './App.css';
import Home from "./component/Home";

class App extends React.Component{
  render(){
    return(
      <div>
        <Header />
        <Home />
      </div>
    )
  }
}

export default App;

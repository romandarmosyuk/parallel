import React from "react";
import './styles/App.css';
import Header from "./components/Header";
import HomeImage from "./components/HomeImage";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header/>
      <HomeImage/>
      <Main/>
    </div>
  );
}

export default App;

import React from "react";
import  { Header } from "./compotents/Header";
import "./App.css"
import Main from "./compotents/Main";
import { Footer } from "./compotents/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;

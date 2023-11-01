import React from "react";
import  { Header } from "./compotents/Header";
import { Main } from "./compotents/Main";
import { Footer } from "./compotents/Footer";

import "./App.css"

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

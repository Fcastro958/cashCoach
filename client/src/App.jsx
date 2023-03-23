// App.jsx
import React from "react";
import "./App.css";
import Features from "./componets/Features";
import Footer from "./componets/Footer";
import NavBar from "./componets/NavBar";
import About from "./componets/About";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="App-container">
        <About />
        <Features />
      </div>
        <Footer />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from "./components/Header";
import Store from "./components/Store";

const App = () => (
  <div className="App">
    <Header title="Elf Computing" subtitle="Laptops" description="Customize your laptop" />
    <main>
      <Store />
    </main>
  </div>
);

export default App;


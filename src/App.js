import React from 'react'
import './App.css';
import Conversor from './components/Conversor'
export default function App() {  
  return (
    <div className="App">
      <Conversor moedaA="USD" moedaB="BRL"/>
      <Conversor moedaA="BRL" moedaB="USD"/>
    </div>
  );
}

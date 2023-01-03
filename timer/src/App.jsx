import { useState } from 'react'
import TimerHimeno from './TimerHimeno'
import './App.css'

function App() {

  return (
    <main>
      <div className="container">
        <div className="buttons-container">
          <h3>Quantos minutos de comercial?</h3>
          <button className="button-setup">04</button>
          <button className="button-setup">06</button>
          <button className="button-setup">08</button>
          <button className="button-setup">10</button>
        </div>
      </div>
    </main>
  )
}

export default App

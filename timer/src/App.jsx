import { useState } from 'react'
import TimerHimeno from './TimerHimeno'
import TimerPower from './TimerPower'
import TimerMakima from './TimerMakima'
import TimerDenji from './TimerDenji'
import './App.css'

function App() {
  const [timer, setTimer] = useState(null)

  return (
      <div className="container">
        <div className="buttons-container">
          <h3>Quantos minutos de comercial?</h3>
          <button onClick={() => setTimer('himeno')} className="button-setup">04</button>
          <button onClick={() => setTimer('power')} className="button-setup">06</button>
          <button onClick={() => setTimer('denji')} className="button-setup">08</button>
          <button onClick={() => setTimer('makima')} className="button-setup">10</button>
        </div>
        <div className="timers">
          {timer === 'denji' && <TimerDenji />}
          {timer === 'himeno' && <TimerHimeno />}
          {timer === 'makima' && <TimerMakima />}
          {timer === 'power' && <TimerPower />}
        </div>
        <div>
          {timer === null && <img src="https://thumbs.gfycat.com/AliveAssuredGander-size_restricted.gif" />}
        </div>
      </div>
  )
}

export default App

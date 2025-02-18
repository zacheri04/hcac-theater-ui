import { useState } from 'react'
import './App.css'

import InactiveScreen from './InactiveScreen';

function App() {
  const [active, setActive] = useState(false);

  return (
    <div className="absolute w-svw h-svh overflow-hidden bg-bradley text-white">
      <button onClick={() => {setActive(!active)}}>Toggle Active</button>
      {!active && <InactiveScreen onClick={() => setActive(!active)} />}
      {active && <p>active</p>}
    </div>
  )
}

export default App

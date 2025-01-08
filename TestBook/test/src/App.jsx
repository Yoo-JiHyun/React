import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

 return (
  <div>
    {count}
    <button onClick={() => setCount((c) => c + 1)}>
      +1
    </button>
  </div>
 )
}

export default App

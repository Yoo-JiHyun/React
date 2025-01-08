import { useState } from 'react'
import './App.css'
import CardList from './CardList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CardList />
    </>
  )
}

export default App

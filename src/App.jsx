import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import PythonCheatsheet from './components/Python_cheatsheet'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <PythonCheatsheet />
    </>
  )
}

export default App

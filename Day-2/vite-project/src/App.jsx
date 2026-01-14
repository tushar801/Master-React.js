import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [value, setValue] = useState('')

  return (
    <>
      <Card title="Tushar Jain" name={value} setValue={setValue}/>
      <Card title="Terotam TechLabs" name={value} setValue={setValue}/>
    </>
  )
}

export default App

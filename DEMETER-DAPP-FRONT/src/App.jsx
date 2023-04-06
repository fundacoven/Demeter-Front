import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Nav from './pages/nav/Nav'
import Principal from './principal'
import UserInfo from './pages/user-info/UserInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <Principal />
      <UserInfo />
    </div>
  )
}

export default App

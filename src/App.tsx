import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Algorithms from './components/Algorithms'
import { ContextProvider } from './context/context'
import { ErrorMessage } from './components/utils/ErrorMessage'

function App() {

  return (
    <ContextProvider>
      <div className="App">
        <Algorithms />
        <ErrorMessage />
      </div>
    </ContextProvider>
  )
}

export default App

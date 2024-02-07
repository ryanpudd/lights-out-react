import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Grid from './components/Grid/Grid'
import { selectHasCompleted, selectHasGame } from './features/game/gameSlice'
import { useSelector } from 'react-redux'
import NewGameButton from './components/NewGameButton/NewGameButton'
import Box from '@mui/material/Box'

function App() {
  const hasGame = useSelector(selectHasGame)
  const hasComplete = useSelector(selectHasCompleted)

  if (hasComplete) {
    return (<Box>Congratulations!!</Box>)
  }

  if (hasGame) {
    return (
      <Grid />
    )
  }

  return (<Box><NewGameButton size={3} /><NewGameButton size={5} /><NewGameButton size={9} /></Box>)
}

export default App

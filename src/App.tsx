import './App.css'
import Game from './components/game/game'
import Header from './components/header/header'

function App() {
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      <Header />
      <Game />
    </div>
  )
}

export default App

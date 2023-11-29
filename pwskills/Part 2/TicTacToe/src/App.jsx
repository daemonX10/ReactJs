import './App.css'
import Grid from './components/Grid/Grid'

function App() {

  return (
    <>
    <h1 style={{textAlign : 'center', color:'whitesmoke'}} >Tic Tac Toe</h1>
    <h2 style={{textAlign : 'left', color:'whitesmoke', paddingLeft:'5vw'}} >Player 1 : X</h2>
    <Grid numberOfCards={9}/>
    </>
  )
}

export default App

  import { useState } from "react"
  import Card from "../Card/Card"
  import './Grid.css'
  import PropTypes from 'prop-types'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import  isWinner  from  "../../helper/CheckWinner.js"



  const Grid = ({numberOfCards=9}) => {

  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);

  const playerTurn = () => {
    return winner == null ? (turn ? 'X' : 'O') : winner;
  }

  function play (index){
    console.log('Move Played', index);
    const newBoard = [...board];
    if (turn == true) {
      newBoard[index] = 'X';
    }
    else {
      newBoard[index] = 'O';
    }
    const win = isWinner(newBoard, turn ? 'X' : 'O');
    if (win) {
      setWinner(win);
      toast.success(`Winner is ${win}`, {
        position: "top-right",
        theme: "colored",
      });
    }
    setBoard([...newBoard]);
    setTurn(!turn);
}

  function reset(){
    setBoard(Array(numberOfCards).fill(""));
    setWinner(null);
  }

  return (
  <>
    <h1 className="turn-highlight">
        Current Turn  :  {playerTurn()}
    </h1>
    <ToastContainer/>
    <button onClick={reset} className="reset"> Next Game </button>
    
    { winner &&  (
      <h1 className="winner-highlight">
        Winner is {winner}
      </h1>
    )}

    <div className="grid">
      {board.map((value, idx) => {
        return <Card onPlay={play} player={value} key={idx} index={idx} gameEnd = {winner ? true : false}  />
      })}
    </div>
  </>
  )
  }

  Grid.propTypes = {
  numberOfCards: PropTypes.number
  }

  export default Grid
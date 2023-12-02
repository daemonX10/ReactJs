  import { useState } from "react"
  import Card from "../Card/Card"
  import './Grid.css'
  import PropTypes from 'prop-types'
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

  function isWinner(board, symbol) {
  if (board[0] === symbol && board[1] === symbol && board[2] === symbol) return symbol;
  if (board[3] === symbol && board[4] === symbol && board[5] === symbol) return symbol;
  if (board[6] === symbol && board[7] === symbol && board[8] === symbol) return symbol;

  if (board[0] === symbol && board[3] === symbol && board[6] === symbol) return symbol;
  if (board[1] === symbol && board[4] === symbol && board[7] === symbol) return symbol;
  if (board[2] === symbol && board[5] === symbol && board[8] === symbol) return symbol;

  if (board[0] === symbol && board[4] === symbol && board[8] === symbol) return symbol;
  if (board[2] === symbol && board[4] === symbol && board[6] === symbol) return symbol;

  return null;
  }

  const Grid = ({numberOfCards=9}) => {

  const [turn, setTurn] = useState(true);
  const [board, setBoard] = useState(Array(numberOfCards).fill(""));
  const [winner, setWinner] = useState(null);

  const playerTurn = () => {
    return winner == null ? (turn ? 'X' : 'O') : winner;
  }

  function play (index){
  if(board[index] === "" && winner == null){
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
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    setBoard([...newBoard]);
    setTurn(!turn);
  }else{
    console.log('Invalid Move', index);
    toast.error("Invalid Move", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      progress: undefined,
    });
  }
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
        return <Card onPlay={play} player={value} key={idx} index={idx} />
      })}
    </div>
  </>
  )
  }

  Grid.propTypes = {
  numberOfCards: PropTypes.number
  }

  export default Grid
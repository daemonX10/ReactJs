import { useState } from "react"
import Card from "../Card/Card"
import './Grid.css'
import PropTypes from 'prop-types'

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

  function play (index){
    console.log('Move Played' , index);
    if(turn == true){
      board[index] = 'X';
    }
    else{
      board[index] = 'O';
    }
    
    const win = isWinner(board, turn ? 'X' : 'O');
    if (win){
      setWinner(win);
    }

    setBoard([...board]);
    setTurn(!turn);
  }

  return (
  <>
    <h1 className="turn-highlight">
      Current Turn  : {turn ? 'X' : 'O'}
    </h1>
    
    {winner && (
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
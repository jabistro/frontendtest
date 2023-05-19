import React, { useEffect, useState } from 'react'
import Square from '../Square/Square'
import { chessSquareNames } from '../../utils/chessSquareNames';
import './Board.css';

const Board = ({ logSquare, selectedSquare}) => {
    const [board, setBoard] = useState([]);

    useEffect(()=>{
        setBoard(chessSquareNames());
    }, []);
    
    return (
        <div className='board'>
            {board && board.map((square, index)=>{
                return (
                    <Square key={index} logSquare={logSquare} selectedSquare={selectedSquare} id={square} index={index} />
                )
            })}
        </div>
    )
}

export default Board
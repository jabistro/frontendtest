import React, { useEffect, useState } from 'react'
import './Square.css';

const Square = ({logSquare, selectedSquare, id, index}) => {
    const [color, setColor] = useState("")
  
    const selectSquare = () => {
      logSquare(id)
    }
  
    useEffect(()=>{
      let row = Math.floor(index / 8)
      if ((index + row) % 2 === 0) setColor("white")
      else setColor("green")
    }, [index, selectedSquare])

    
  
    return (
      <div onClick={selectSquare} className={`${color} ${selectedSquare === id ? color === 'green' ? "selectedGreen" : 'selectedWhite' : ""}`} id={`${id}`}>
      </div>
    )
  }

export default Square
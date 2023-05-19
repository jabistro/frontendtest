import { useState } from 'react';
import './App.css';
import Board from './components/Board/Board';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [clickedSquares, setClickedSquares] = useState([]);
  const [selectedSquare, setSelectedSquare] = useState("");

  const logSquare = (id) => {
    setClickedSquares([...clickedSquares, id]);
    setSelectedSquare(id)
  }

  return (
    <div className="wrap">
      <Board logSquare={logSquare} selectedSquare={selectedSquare} />
      <Sidebar clickedSquares={clickedSquares} />
    </div>
  );
}

export default App;

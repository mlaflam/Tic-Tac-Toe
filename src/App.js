import { useState } from "react";
import Square from "./components/Square";
import Board from "./components/Board";

export default function Game() {
  return (
    <div className="game">
      <div className="game-board">
        <Board/>
      </div>
      <div className="get-info">
        <ol>{/*TODO*/}</ol>
      </div>

    </div>
  )
}



import React from 'react';
import './App.css';
import Board from './components/Board';
import Card from './components/Card'

function App() {
  return (
    <div class="App">
		<div class="flexbox">
			<Board id="board-1" className="board">
				<Card id="card-1" className="card" draggable="true">
					<p>Card one</p>
				</Card>
			</Board>

			<Board id="board-2" className="board">
				<Card id="card-2" className="card" draggable="true">
					<p>Card two</p>
				</Card>
			</Board>
		</div>
	</div>
  );
}

export default App;

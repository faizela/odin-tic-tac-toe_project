
const Gameboard = function() {
  const rows = 3
  const columns = 4
  const board = []

  for (let i = 0; i < rows; i++) {
    board[i] = []
    for (let j = 0; j < columns; j++) {
      board[i].push(Cell())
    }
  }

   // This will be the method of getting the entire board that our
  // UI will eventually need to render it.
  const getBoard = () => board;
  

  const dropToken = (column, player) => {

  const availableCells = board.filter((row) => row[column].getValue() === 0).map(row => row[column]);
 
  if (!availableCells.length) return;

  const lowestRow = availableCells.length - 1;
  board[lowestRow][column].addToken(player);
  

  const printBoard = () => {
    const boardWithCellValues = board.map((row) => row.map((cell) => cell.getValue()))
    console.log(boardWithCellValues);
  };

  return { getBoard, dropToken, printBoard };
}

}

function Cell () {
  let value = 0

  const addToken = (player) => {
    
  }
}
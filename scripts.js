
const Gameboard = (function() {
 const rows = 3
 const columns = 3

 for (let i = 0; i < rows; i++) {
  board[i] = []
  for (let j = 0; j < columns; j++){
    board[i].push(Cell())
  }

 }


 const getBoard = () => board

 return {getBoard}

}) ()


// function Players (p1_name, p2_name) {
//   const tokens = ['o', 'x']
//  const players = [
//   {} 
//  ]
// }


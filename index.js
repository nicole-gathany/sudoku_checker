function doneOrNot(board){
  //your code here
  
  
  
  if(board.map(row => row.includes(0)).includes(true)){
    return "Try again!"
  }
  let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  //0-2, 3-5, 6-8
  
  //look for duplicates in blocks
  let blocks = [
                [board[0][0], board[0][1], board[0][2], board[1][0], board[1][1], board[1][2], board[2][0], board[2][1], board[2][2] ],
                [board[0][3], board[0][4], board[0][5], board[1][3], board[1][4], board[1][5], board[2][3], board[2][4], board[2][5] ],
                [board[0][6], board[0][7], board[0][8], board[1][6], board[1][7], board[1][8], board[2][6], board[2][7], board[2][8] ],
             
                [board[3][0], board[3][1], board[3][2], board[4][0], board[4][1], board[4][2], board[5][0], board[5][1], board[5][2] ],
                [board[3][3], board[3][4], board[3][5], board[4][3], board[4][4], board[4][5], board[5][3], board[5][4], board[5][5] ],
                [board[3][6], board[3][7], board[3][8], board[4][6], board[4][7], board[4][8], board[5][6], board[5][7], board[5][8] ],
             
                [board[6][0], board[6][1], board[6][2], board[7][0], board[7][1], board[7][2], board[8][0], board[8][1], board[8][2] ],
                [board[6][3], board[6][4], board[6][5], board[7][3], board[7][4], board[7][5], board[8][3], board[8][4], board[8][5] ],
                [board[6][6], board[6][7], board[6][8], board[7][6], board[7][7], board[7][8], board[8][6], board[8][7], board[8][8] ]
            
            ]
  
 
  let columns = [board.map(rows => rows[0]), board.map(rows => rows[1]), board.map(rows => rows[2]), 
                board.map(rows => rows[3]), board.map(rows => rows[4]), board.map(rows => rows[5]), 
                board.map(rows => rows[6]), board.map(rows => rows[7]), board.map(rows => rows[8])]
 
  if(columns.some(arr => !numbers.every(el => arr.includes(el)))) return "Try again!"
  if(blocks.some(arr =>  !numbers.every(el => arr.includes(el)))) return "Try again!"
  
  return board.map(row => row.includes(0)).includes(true) ? "Try again!" : "Finished!"

}
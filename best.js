function doneOrNot(rows){

  var columns = []
  ,    blocks = [];
  
  for (var i = 0; i < 9; i++) {
    columns[i] = [];
    
    for (var j = 0; j < 9; j++) {
      var k = Math.floor(i / 3) + Math.floor(j / 3) * 3;
      blocks[k] = blocks[k] || [];
      
      blocks[k].push(rows[i][j]);
      columns[i].push(rows[j][i]);
    }
  }
  
  var is_valid_row = (row) => row.slice(0).sort((a, b) => a - b).join('') == '123456789';
  
  var is_valid = rows.every(is_valid_row) 
    && columns.every(is_valid_row) 
    && blocks.every(is_valid_row);
  
  return is_valid ? 'Finished!' : 'Try again!';
}
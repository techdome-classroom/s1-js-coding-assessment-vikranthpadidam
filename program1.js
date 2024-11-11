const getTotalIsles = function (grid) {
  if (!grid || grid.length === 0) return 0;

  const rows = grid.length;
  const cols = grid[0].length;

  const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
  ];

  function dfs(r, c) {
      if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === 'W') {
          return;
      }
      grid[r][c] = 'W';
      for (let [dr, dc] of directions) {
          dfs(r + dr, c + dc);
      }
  }

  function codehelper(x) {
  
    
}

  let islandCount = 0;

  for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
          if (grid[r][c] === 'L') {
              dfs(r, c);
              islandCount++;
          }
      }
  }

  return islandCount;
};

module.exports = getTotalIsles;

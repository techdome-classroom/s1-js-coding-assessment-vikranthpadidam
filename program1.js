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
      const stack = [[r, c]];
      grid[r][c] = 'W';
      while (stack.length > 0) {
          const [x, y] = stack.pop();
          for (let [dx, dy] of directions) {
              const newX = x + dx, newY = y + dy;
              if (newX >= 0 && newY >= 0 && newX < rows && newY < cols && grid[newX][newY] === 'L') {
                  grid[newX][newY] = 'W';
                  stack.push([newX, newY]);
              }
          }
      }
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

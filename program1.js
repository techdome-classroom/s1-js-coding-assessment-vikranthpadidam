const countIslands = function (map) {
  if (!map || map.length === 0) return 0;

  const numRows = map.length;
  const numCols = map[0].length;

  const moves = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1]
  ];

  function explore(x, y) {
      const stack = [[x, y]];
      map[x][y] = 'W';
      while (stack.length > 0) {
          const [currentX, currentY] = stack.pop();
          for (let [dx, dy] of moves) {
              const newX = currentX + dx, newY = currentY + dy;
              if (newX >= 0 && newY >= 0 && newX < numRows && newY < numCols && map[newX][newY] === 'L') {
                  map[newX][newY] = 'W';
                  stack.push([newX, newY]);
              }
          }
      }
  }

  let islandCount = 0;

  for (let i = 0; i < numRows; i++) {
      for (let j = 0; j < numCols; j++) {
          if (map[i][j] === 'L') {
              explore(i, j);
              islandCount++;
          }
      }
  }

  return islandCount;
};

module.exports = countIslands;

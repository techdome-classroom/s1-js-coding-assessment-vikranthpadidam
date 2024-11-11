const matchPattern = function (message, pattern) {
  let messageLength = message.length, patternLength = pattern.length;
  let dpArray = Array(patternLength + 1).fill(false);
  dpArray[0] = true;

  for (let j = 1; j <= patternLength; j++) {
      if (pattern[j - 1] === '*') dpArray[j] = dpArray[j - 1];
  }

  for (let i = 1; i <= messageLength; i++) {
      let prevValue = dpArray[0];
      dpArray[0] = false;
      for (let j = 1; j <= patternLength; j++) {
          let tempValue = dpArray[j];
          if (pattern[j - 1] === message[i - 1] || pattern[j - 1] === '?') {
              dpArray[j] = prevValue;
          } else if (pattern[j - 1] === '*') {
              dpArray[j] = dpArray[j - 1] || dpArray[j];
          } else {
              dpArray[j] = false;
          }
          prevValue = tempValue;
      }
  }

  return dpArray[patternLength];
};

module.exports = matchPattern;
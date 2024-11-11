const decodeTheRing = function (s, p) {
  let m = s.length, n = p.length;
  let dp = Array(n + 1).fill(false);
  dp[0] = true;

  for (let j = 1; j <= n; j++) {
      if (p[j - 1] === '*') dp[j] = dp[j - 1];
  }

  for (let i = 1; i <= m; i++) {
      let prev = dp[0];
      dp[0] = false;
      for (let j = 1; j <= n; j++) {
          let temp = dp[j];
          if (p[j - 1] === s[i - 1] || p[j - 1] === '?') {
              dp[j] = prev;
          } else if (p[j - 1] === '*') {
              dp[j] = dp[j - 1] || dp[j];
          } else {
              dp[j] = false;
          }
          prev = temp;
      }
  }

  return dp[n];
};

module.exports = decodeTheRing;

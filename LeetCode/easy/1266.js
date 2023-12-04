// 1266. Minimum Time Visiting All Points

const minTimeToVisitAllPoints = (points) => {
  let result = 0;
  for (let i = 1; i < points.length; i++) {
    result += Math.max(
      Math.abs(points[i][0] - points[i - 1][0]),
      Math.abs(points[i][1] - points[i - 1][1])
    );
  }
  return result;
};

//reduce 
const minTimeToVisitAllPointsV2 = (points) => {
  return points.slice(1).reduce((acc, cur, index) => {
   let prev = points[index];
    return acc + Math.max(Math.abs(cur[0] - prev[0]), Math.abs(cur[1] - prev[1]))
  }, 0)
};

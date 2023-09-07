export default function getPercentages(data: number[]) {
  const currentPercentage = ((data[0] * 100) / (data[0] + data[1])).toFixed(0);
  const bestPossible = (
    ((data[0] + data[2]) * 100) /
    data.reduce((i, j) => i + j)
  ).toFixed(0);

  return {
    currentPercentage,
    bestPossible,
  };
}

const generateData = (length, base = 60000, variance = 1000) =>
  Array.from({ length }, (_, i) => base + Math.floor(Math.random() * variance - variance / 2));

export const chartDataMap = {
  '1d': generateData(8, 62500, 300),
  '3d': generateData(15, 62000, 600),
  '1w': generateData(20, 61000, 1000),
  '1m': generateData(30, 59000, 2000),
  '6m': generateData(26, 55000, 5000),
  '1y': generateData(52, 52000, 7000),
  'max': generateData(80, 40000, 10000),
};

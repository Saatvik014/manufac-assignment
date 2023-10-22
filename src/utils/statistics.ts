import { WineDataPoint } from "../WineData";

interface WineStats {
  mean: number;
  median: number;
  mode: number;
}

// Function to calculate Flavanoids statistics
export const calculateFlavanoidsStats = (
  data: WineDataPoint[]
): WineStats[] => {
  // Extract unique classes from the data
  const classes = new Set(data.map((point) => point.Alcohol));
  const stats: WineStats[] = [];

  classes.forEach((wineClass) => {
    // Filter data for the specific wine class
    const classData = data.filter((point) => point.Alcohol === wineClass);
    const flavanoids = classData.map((point) => point.Flavanoids);

    // Calculate mean
    const mean =
      flavanoids.reduce((acc, val) => acc + val, 0) / flavanoids.length;

    // Calculate median
    const sortedFlavanoids = [...flavanoids].sort((a, b) => a - b);
    const middle = Math.floor(sortedFlavanoids.length / 2);
    const median =
      sortedFlavanoids.length % 2 === 0
        ? (sortedFlavanoids[middle - 1] + sortedFlavanoids[middle]) / 2
        : sortedFlavanoids[middle];

    // Calculate mode
    const modeMap: { [key: number]: number } = {};
    let maxCount = 0;
    let mode = flavanoids[0];
    for (const value of flavanoids) {
      if (modeMap[value] === undefined) {
        modeMap[value] = 1;
      } else {
        modeMap[value]++;
      }

      if (modeMap[value] > maxCount) {
        maxCount = modeMap[value];
        mode = value;
      }
    }

    // Push the calculated statistics into the array
    stats.push({
      mean,
      median,
      mode,
    });
  });

  return stats;
};

// Function to calculate Gamma statistics
export const calculateGammaStats = (data: WineDataPoint[]): WineStats[] => {
  // Extract unique classes from the data
  const classes = new Set(data.map((point) => point.Alcohol));
  const stats: WineStats[] = [];

  classes.forEach((wineClass) => {
    // Filter data for the specific wine class
    const classData = data.filter((point) => point.Alcohol === wineClass);
    const gamma = classData.map(
      (point) => (point.Ash * point.Hue) / point.Magnesium
    );

    // Calculate mean
    const mean = gamma.reduce((acc, val) => acc + val, 0) / gamma.length;

    // Calculate median
    const sortedGamma = [...gamma].sort((a, b) => a - b);
    const middle = Math.floor(sortedGamma.length / 2);
    const median =
      sortedGamma.length % 2 === 0
        ? (sortedGamma[middle - 1] + sortedGamma[middle]) / 2
        : sortedGamma[middle];

    // Calculate mode
    const modeMap: { [key: number]: number } = {};
    let maxCount = 0;
    let mode = gamma[0];
    for (const value of gamma) {
      if (modeMap[value] === undefined) {
        modeMap[value] = 1;
      } else {
        modeMap[value]++;
      }

      if (modeMap[value] > maxCount) {
        maxCount = modeMap[value];
        mode = value;
      }
    }

    // Push the calculated statistics into the array
    stats.push({
      mean,
      median,
      mode,
    });
  });

  return stats;
};

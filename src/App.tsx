import "./App.css";
import { WineData } from "./WineData";
import {
  calculateFlavanoidsStats,
  calculateGammaStats,
} from "./utils/statistics";

const App = () => {
  // Calculate statistics for Flavanoids and Gamma using WineData
  const flavanoidsStats = calculateFlavanoidsStats(WineData);
  const gammaStats = calculateGammaStats(WineData);

  // Extract unique classes from WineData
  const uniqueClasses = Array.from(
    new Set(WineData.map((point) => point.Alcohol))
  );

  return (
    <div className="App">
      <h1 className="title">Wine Statistics</h1>
      <h2>Flavanoids Statistics</h2>
      <div className="flavanoid-statistics-container">
        <table className="statistics-table">
          <thead>
            <tr>
              <th>Measure</th>
              {uniqueClasses.map((wineClass, index) => (
                <th key={index}>Class {wineClass}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Flavanoids Mean</td>
              {uniqueClasses.map((wineClass, index) => (
                <td key={index}>{flavanoidsStats[index].mean.toFixed(3)}</td>
              ))}
            </tr>
            <tr>
              <td>Flavanoids Median</td>
              {uniqueClasses.map((wineClass, index) => (
                <td key={index}>{flavanoidsStats[index].median.toFixed(3)}</td>
              ))}
            </tr>
            <tr>
              <td>Flavanoids Mode</td>
              {uniqueClasses.map((wineClass, index) => (
                <td key={index}>{flavanoidsStats[index].mode.toFixed(3)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>

      <h2>Gamma Statistics</h2>
      <div className="gamma-statistics-container">
        <table className="statistics-table">
          <thead>
            <tr>
              <th>Measure</th>
              {uniqueClasses.map((wineClass, index) => (
                <th key={index}>Class {wineClass}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Gamma Mean</td>
              {uniqueClasses.map((wineClass, index) => (
                <td key={index}>{gammaStats[index].mean.toFixed(3)}</td>
              ))}
            </tr>
            <tr>
              <td>Gamma Median</td>
              {uniqueClasses.map((wineClass, index) => (
                <td key={index}>{gammaStats[index].median.toFixed(3)}</td>
              ))}
            </tr>
            <tr>
              <td>Gamma Mode</td>
              {uniqueClasses.map((wineClass, index) => (
                <td key={index}>{gammaStats[index].mode.toFixed(3)}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default App;

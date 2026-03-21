import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend
);

function SortedChart({ expenses }) {

  const data = {
    labels: expenses.map((_, index) => `Exp ${index + 1}`),
    datasets: [
      {
        label: "Sorted Expenses",
        data: expenses.map((e) => e.amount),
        backgroundColor: "#36a2eb",
        borderRadius: 6,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
  };

  return (
    <div className="chart-container">
      <h2>Sorted Expenses</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default SortedChart;
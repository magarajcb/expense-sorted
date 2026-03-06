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

function ExpenseChart({ expenses }) {

  const categories = ["Food", "Travel", "Bills", "Others"];

  const totals = categories.map((cat) =>
    expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + Number(exp.amount), 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses",
        data: totals,
        backgroundColor: [
          "#ff6384", // Food
          "#36a2eb", // Travel
          "#ffcd56", // Bills
          "#4bc0c0", // Others
        ],
        borderRadius: 8,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <div className="chart-container">

      <h2>Category-wise Spending</h2>

      <Bar data={data} options={options} />

    </div>
  );
}

export default ExpenseChart;
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
  const categories = [
    "Food",
    "Travel",
    "Bills",
    "Shopping",
    "Health",
    "Entertainment",
    "Others",
  ];

  const totals = categories.map((cat) =>
    expenses
      .filter((exp) => exp.category === cat)
      .reduce((sum, exp) => sum + Number(exp.amount), 0)
  );

  const data = {
    labels: categories,
    datasets: [
      {
        label: "Expenses (₹)",
        data: totals,
        backgroundColor: [
          "#8b5cf6", // Food
          "#3b82f6", // Travel
          "#ef4444", // Bills
          "#f59e0b", // Shopping
          "#10b981", // Health
          "#ec4899", // Entertainment
          "#6b7280", // Others
        ],
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return ` ₹${context.raw}`;
          },
        },
      },
    },

    scales: {
      y: {
        beginAtZero: true,
        grid: {
          color: "#f1f5f9",
        },
        ticks: {
          callback: function (value) {
            return `₹${value}`;
          },
        },
      },

      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  const hasData = totals.some((value) => value > 0);

  if (!hasData) {
    return (
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-3">📊</div>

        <h2 className="text-xl font-bold text-gray-700 mb-2">
          No Chart Data Available
        </h2>

        <p className="text-gray-500">
          Add expenses to see category-wise spending analysis.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Category-wise Spending
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Visual breakdown of your expenses by category
        </p>
      </div>

      <div className="h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default ExpenseChart;
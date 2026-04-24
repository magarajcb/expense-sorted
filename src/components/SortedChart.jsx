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
    labels: expenses.map((_, index) => `Expense ${index + 1}`),

    datasets: [
      {
        label: "Sorted Expenses (₹)",
        data: expenses.map((e) => Number(e.amount)),
        backgroundColor: "#3b82f6",
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

  if (expenses.length === 0) {
    return (
      <div className="bg-gray-50 border border-dashed border-gray-300 rounded-2xl p-10 text-center">
        <div className="text-5xl mb-3">📈</div>

        <h2 className="text-xl font-bold text-gray-700 mb-2">
          No Sorted Data Available
        </h2>

        <p className="text-gray-500">
          Add expenses and use sorting to view this chart.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">
          Sorted Expenses Chart
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Visual comparison of expenses after applying sorting
        </p>
      </div>

      <div className="h-[400px]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
}

export default SortedChart;
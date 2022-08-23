import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Case on Hold", "Submitted", "In Production"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3],
      backgroundColor: ["#f87171", "#22d3ee", "#fbbf24" ],
      borderColor: ["#f87171", "#22d3ee", "#fbbf24"],
      borderWidth: 1,
    },
  ],
};

const pieOptions = {
  plugins: {
    legend: {
      display: true,
      labels: {
        font: {
          size: 12,
        },
      },
    },
  },
};


function ChartComponent() {
  return (
    <div className='max-w-md'>

      <Pie className="shadow-2xl p-3 rounded-3xl" data={data} options={pieOptions}  />

    </div>
  )
}

export default ChartComponent;

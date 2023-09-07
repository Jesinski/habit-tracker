"use client";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.size = 16;

type Props = {
  name: string;
  data: {
    labels: string[];
    data: number[];
  };
};

export default function ProgressTile({ name, data }: Props) {
  const payload = {
    labels: data.labels,
    datasets: [
      {
        label: "# of days",
        data: data.data,
        backgroundColor: [
          "rgba(24, 132, 37, 0.4)",
          "rgba(171, 13, 13, 0.4)",
          "rgba(130, 129, 129, 0.4)",
        ],
        borderColor: [
          "rgba(24, 132, 37, 1)",
          "rgba(171, 13, 13, 1)",
          "rgba(130, 129, 129, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    display: false,
  };

  return (
    <div className="p-6">
      <span className="m-2 text-xl font-bold">{name}</span>
      <Doughnut data={payload} />
      <div className="flex justify-between">
        <span className="m-2 text-l font-semibold">
          Current %{" "}
          {((data.data[0] * 100) / (data.data[0] + data.data[1])).toFixed(0)}
        </span>
        <span className="m-2 text-l font-semibold">
          Best Possible %{" "}
          {(
            ((data.data[0] + data.data[2]) * 100) /
            data.data.reduce((i, j) => i + j)
          ).toFixed(0)}
        </span>
      </div>
    </div>
  );
}

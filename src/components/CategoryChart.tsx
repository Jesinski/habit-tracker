import fetcher from "@/lib/fetcher";
import {
  ArcElement,
  ChartData,
  Chart as ChartJS,
  Legend,
  Tooltip,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import useSWR from "swr";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.size = 16;

export type ProgressChartData = {
  done: number;
  missed: number;
  unknown: number;
  pending: number;
};

export default function CategoryChart(props: { categoryName: string }) {
  const { data, isLoading } = useSWR<ProgressChartData>(
    "/api/workout",
    fetcher
  );

  if (isLoading) return null;
  return (
    <div className="p-6">
      <span className="m-2 text-xl uppercase font-bold">
        {props.categoryName}
      </span>
      <Doughnut data={getChartData(data!)} />
    </div>
  );
}

function getChartData(
  data: ProgressChartData
): ChartData<"doughnut", number[], unknown> {
  return {
    labels: ["Done", "Missed", "Unknown", "To Go"],
    datasets: [
      {
        label: "# of days",
        data: [data.done, data.missed, data.unknown, data.pending],
        backgroundColor: [
          "rgba(24, 132, 37, 0.4)",
          "rgba(171, 13, 13, 0.4)",
          "rgba(130, 129, 129, 0.4)",
          "rgba(255, 255, 255, 0.4)",
        ],
        borderColor: [
          "rgba(24, 132, 37, 1)",
          "rgba(171, 13, 13, 1)",
          "rgba(130, 129, 129, 1)",
          "rgba(255, 255, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
}

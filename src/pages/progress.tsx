import Content from "@/components/Content";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);
ChartJS.defaults.font.size = 16;
export const data = {
  labels: ["Done", "Missed", "To Go"],
  datasets: [
    {
      label: "# of days",
      data: [22, 14, 9],
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

export default function Progress() {
  return (
    <Layout>
      <Header title="Progress" />
      <Content>
        <div className="flex flex-col space-y-2">
          <div className="p-6">
            <span className="m-2 text-xl font-bold">Overall</span>
            <Doughnut data={data} />
          </div>
          <div className="p-6">
            <span className="m-2 text-xl font-bold">Sleep</span>
            <Doughnut data={data} />
          </div>
          <div className="p-6">
            <span className="m-2 text-xl font-bold">Workout</span>
            <Doughnut data={data} />
          </div>
          <div className="p-6">
            <span className="m-2 text-xl font-bold">Nutrition</span>
            <Doughnut data={data} />
          </div>
          <div className="p-6">
            <span className="m-2 text-xl font-bold">Water</span>
            <Doughnut data={data} />
          </div>
        </div>

        <div className="border-b-2 border-black my-4" />

        <span className="flex-none p-2 m-2 h-10 font-extrabold uppercase text-3xl">
          Status
        </span>
        <div className="flex flex-col p-2 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-gray-400 bg-white rounded-md h-12 px-2">
            <span className="text-2xl font-semibold">Series Length</span>
            <span className="text-2xl font-semibold">35</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-400 bg-white rounded-md h-12 px-2">
            <span className="text-2xl font-semibold">Remaining Days</span>
            <span className="text-2xl font-semibold">12</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-400 bg-white rounded-md h-12 px-2">
            <span className="text-2xl font-semibold">Current Streak</span>
            <span className="text-2xl font-semibold">14</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-400 bg-white rounded-md h-12 px-2">
            <span className="text-2xl font-semibold">Personal Best</span>
            <span className="text-2xl font-semibold">30</span>
          </div>
        </div>
      </Content>
    </Layout>
  );
}

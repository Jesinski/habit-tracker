import Content from "@/components/Content";
import Header from "@/components/Header";
import ProgressTile from "@/components/ProgressTile";
import getCategoryProgress from "@/lib/getCategoryProgress";
import getNutritionProgress from "@/lib/getNutritionProgress";
import getSleepProgress from "@/lib/getSleepProgress";

export default async function Page() {
  const nutritionData = await getNutritionProgress();
  const workoutData = await getCategoryProgress("Workout");
  const waterData = await getCategoryProgress("Water");
  const sleepData = await getSleepProgress();

  console.log(nutritionData);
  console.log(workoutData);
  console.log(waterData);
  console.log(sleepData);
  return (
    <>
      <Header title="Progress" />
      <Content>
        <div className="flex flex-col space-y-2">
          {/* <ProgressTile name="Overall" data={data} /> */}
          <ProgressTile name="Sleep" data={sleepData} />
          <ProgressTile name="Nutrition" data={nutritionData} />
          <ProgressTile name="Workout" data={workoutData} />
          <ProgressTile name="Water" data={waterData} />
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
    </>
  );
}

/*
-- Workout
select COUNT(completed), completed
from public.tasks
where category = 'Workout'
group by completed;

-- Water
select COUNT(completed), completed
from public.tasks
where category = 'Water'
group by completed;

-- Sleep
select COUNT(completed), completed, name
from public.tasks
where category = 'Sleep'
group by completed, name;

-- Nutrition
select COUNT(id), DATE(time)
from public.tasks
where category = 'Nutrition' and completed = 1
group by DATE(time), completed
having COUNT(id) = 5
*/

import Content from "@/components/Content";
import Header from "@/components/Header";
import NewProject from "@/components/NewProject";
import Tile from "@/components/Tile";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const DATA = [
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
];

export default async function Page() {
  const supabase = createServerComponentClient({ cookies });

  const { data } = await supabase.from("tasks").select().order("time");
  console.log(data);
  return (
    <>
      <Header title="Routine Center" />
      <Content>
        {data?.length! <= 0 ? (
          <NewProject />
        ) : (
          data?.map((task, index) => {
            return <Tile key={index} task={task} />;
          })
        )}
      </Content>
    </>
  );
}

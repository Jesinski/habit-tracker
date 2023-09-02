"use client";
import Content from "@/components/Content";
import Header from "@/components/Header";
import NewProject from "@/components/NewProject";
import Tile from "@/components/Tile";

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
];

export default function Page() {
  return (
    <>
      <Header title="Routine Center" />
      <Content>
        {DATA?.length! <= 0 ? (
          <NewProject />
        ) : (
          DATA?.map((task, index) => {
            return <Tile key={index} task={task} />;
          })
        )}
      </Content>
    </>
  );
}

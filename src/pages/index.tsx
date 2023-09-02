import Content from "@/components/Content";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import NewProject from "@/components/NewProject";
import Tile from "@/components/Tile";
import { tasks } from "@prisma/client";

const DATA: tasks[] = [
  {
    id: 1,
    name: "Chest Day",
    category: "Workout",
    datetime: new Date(),
    completed: 1,
    projectid: 2,
  },
];

export default function Home() {
  return (
    <Layout>
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
    </Layout>
  );
}

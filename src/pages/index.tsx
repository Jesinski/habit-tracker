import Content from "@/components/Content";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import NewProject from "@/components/NewProject";
import Tile from "@/components/Tile";
import fetcher from "@/lib/fetcher";
import { tasks } from "@prisma/client";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

import useSWR from "swr";
export default function Home() {
  const { data, isLoading } = useSWR<tasks[]>("/api/tasks", fetcher);

  if (isLoading) return "isLoading";

  return (
    <Layout>
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
    </Layout>
  );
}

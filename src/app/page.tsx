import Content from "@/components/Content";
import Header from "@/components/Header";
import NewProject from "@/components/NewProject";
import Tile from "@/components/Tile";
import { Database } from "@/types/database-generated.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const tomorrow = new Date();
  const yesterday = new Date();
  const { data } = await supabase
    .from("tasks")
    .select()
    .lte(
      "time",
      new Date(tomorrow.setDate(tomorrow.getDate() + 1)).toISOString()
    )
    .gte(
      "time",
      new Date(yesterday.setDate(yesterday.getDate() - 1)).toISOString()
    )
    .order("time");

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

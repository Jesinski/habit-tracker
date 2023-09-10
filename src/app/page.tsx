import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import NewProject from "@/components/NewProject";
import Tile from "@/components/Tile";
import { Database } from "@/types/database-generated.types";
import { createServerComponentSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
// NEXT_PUBLIC_SUPABASE_URL
// NEXT_PUBLIC_SUPABASE_ANON_KEY
// SUPABASE_SERVICE_KEY
export default async function Page() {
  const supabase = createServerComponentSupabaseClient<Database>({
    supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL!,
    headers: headers,
    cookies: cookies,
  });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/login");
  }

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
      <Footer />
    </>
  );
}

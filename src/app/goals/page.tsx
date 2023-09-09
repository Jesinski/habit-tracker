import Content from "@/components/Content";
import Header from "@/components/Header";
import { Database } from "@/types/database-generated.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function Page() {
  const supabase = createServerComponentClient<Database>({ cookies });
  const {
    data: { session },
  } = await supabase.auth.getSession();
  if (!session) {
    redirect("/login");
  }
  return (
    <>
      <Header title="Goals" />
      <Content>
        <div className="flex flex-col p-2 space-y-4">
          <div className="flex items-center justify-between border-b-2 border-gray-400 bg-green-50 rounded-md h-12 px-2">
            <span className=" text-2xl font-semibold">Overall</span>
            <span className=" text-2xl font-semibold">80%</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-400 bg-green-200 rounded-md h-12 px-2">
            <span className=" text-2xl font-semibold">Sleep</span>
            <span className=" text-2xl font-semibold">80%</span>
          </div>
          <div className="flex items-center justify-between border-b-2 border-gray-400 bg-green-400 rounded-md h-12 px-2">
            <span className=" text-2xl font-semibold">Workout</span>
            <span className=" text-2xl font-semibold">60%</span>
          </div>
          <Link href="/goals/nutrition">
            <div className="flex items-center justify-between border-b-2 border-gray-400 bg-green-100 rounded-md h-12 px-2">
              <span className=" text-2xl font-semibold">Nutrition</span>
              <span className=" text-2xl font-semibold">90%</span>
            </div>
          </Link>
          <div className="flex items-center justify-between border-b-2 border-gray-400 bg-green-600 rounded-md h-12 px-2">
            <span className=" text-2xl font-semibold">Water</span>
            <span className=" text-2xl font-semibold">95%</span>
          </div>
        </div>

        <div className="border-b-2 border-black my-4" />

        <div className="flex flex-col space-y-2">
          <span className="font-bold uppercase"> How we set your goals</span>
          <span>
            We believe that progress are not linear. Life is somewhat
            unexpected, therefore we need to take this into account to decide
            the goal.
          </span>
          <span>
            We collect data points based on the individual goals to determine
            future targets. Crossing data such series length, usage adherence,
            subjective perception of difficultness, etc.
          </span>
          <span>
            If you achieve your Water Goal with ease, on the next phase it will
            be higher.
          </span>
          <span>
            On the other way around, if you did not achieve a target, it will be
            reduced accordingly, in order to not burn you out.
          </span>
        </div>
      </Content>
    </>
  );
}

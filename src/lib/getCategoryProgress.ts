"use server";
// import { Database } from "@/types/database-generated.types";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default async function getCategoryProgress(category: string) {
  const supabase = createServerComponentClient<any>({ cookies });
  const { data } = await supabase.rpc("get_category_progress", {
    project_id: "a1e31ffc-9a25-46cb-ac67-e6728d80eb4d",
    category: category,
  });

  const dataArr = [0, 0, 0];
  for (let i = 0; i < data.length; i++) {
    switch (data[i].completed) {
      case -1:
        dataArr[1] = data[i].count;
        break;
      case 0:
        dataArr[2] = data[i].count;
        break;
      case 1:
        dataArr[0] = data[i].count;
        break;
    }
  }

  console.log(dataArr);
  return {
    labels: ["Done", "Missed", "Remaining"],
    data: dataArr,
  };
}

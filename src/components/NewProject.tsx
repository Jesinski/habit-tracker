import mutateFetcher from "@/lib/mutateFetcher";
import { BaseSyntheticEvent } from "react";
import useSWRMutation from "swr/mutation";

type NewProjectFormData = {
  startDate: HTMLInputElement;
  endDate: HTMLInputElement;
};

export type NewProjectData = {
  startDate: string;
  endDate: string;
};

export default function NewProject() {
  const { trigger } = useSWRMutation(
    "/api/project",
    mutateFetcher<NewProjectData>
  );

  const createNewProject = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const data = e.target.elements as NewProjectFormData;
    trigger({
      startDate: data.startDate.value,
      endDate: data.endDate.value,
    });
  };

  return (
    <section className="p-2 m-2 flex flex-col">
      <span>No active projects!</span>
      <span>Create a project to track your habits!</span>
      <span>
        A Project consist of a pre-determined period of time, that you will use
        it as a reference of health improvement
      </span>

      <form className="flex flex-col" onSubmit={createNewProject}>
        <label htmlFor="startDate">Start Date</label>
        <input id="startDate" type="date" required />
        <label htmlFor="endDate">End Date</label>
        <input id="endDate" type="date" required />
        <button type="submit">Create new Project!</button>
      </form>
    </section>
  );
}

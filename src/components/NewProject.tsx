"use client";

import createProject from "@/lib/createProject";
import { BaseSyntheticEvent } from "react";
type NewProjectFormData = {
  startDate: HTMLInputElement;
  endDate: HTMLInputElement;
};

export type NewProjectData = {
  startDate: string;
  endDate: string;
};

export default function NewProject() {
  const createNewProject = async (e: BaseSyntheticEvent) => {
    e.preventDefault();
    const formData = e.target.elements as NewProjectFormData;

    try {
      await createProject({
        startDate: formData.startDate.value,
        endDate: formData.endDate.value,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="p-2 m-2 flex flex-col space-y-2">
      <span className="text-xl">No active projects!</span>
      <span className="text-xl">Create a project to track your habits!</span>
      <span className="text-xl">
        A Project consist of a pre-determined period of time, that you will use
        it as a reference of health improvement
      </span>

      <form
        className="flex flex-col space-y-2 py-4"
        onSubmit={createNewProject}
      >
        <label className="text-xl" htmlFor="startDate">
          Start Date
        </label>
        <input id="startDate" type="date" required />
        <label className="text-xl" htmlFor="endDate">
          End Date
        </label>
        <input id="endDate" type="date" required />
        <button
          type="submit"
          className="border-2 border-black rounded-md py-2 text-xl"
        >
          Create new Project!
        </button>
      </form>
    </section>
  );
}

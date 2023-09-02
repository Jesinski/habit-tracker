"use client";

import Content from "@/components/Content";
import GoalTile from "@/components/GoalTile";
import Header from "@/components/Header";
import { useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";

const MEALS = [
  { time: "7:00 AM", name: "1st Meal" },
  { time: "10:00 AM", name: "2nd Meal" },
  { time: "12:00 PM", name: "3rd Meal" },
  { time: "4:00 PM", name: "4th Meal" },
  { time: "7:00 PM", name: "5th Meal" },
];
export default function Page() {
  const [meals, setMeals] = useState(MEALS);

  const [newMealName, setNewMealName] = useState("");
  const [newMealTime, setNewMealTime] = useState("12:00");
  const addNewMeal = () => {
    console.log({ newMealName, newMealTime });
    setMeals([...meals, { name: newMealName, time: newMealTime }]);
  };
  return (
    <>
      <Header title="Nutrition" />
      <Content>
        {meals.map((meal) => {
          return <GoalTile key={meal.name} time={meal.time} name={meal.name} />;
        })}
        <form className="flex justify-between">
          <input
            placeholder="Name"
            id="name"
            onChange={(e) => setNewMealName(e.target.value)}
          />
          <input
            placeholder="Time"
            id="time"
            type="time"
            defaultValue="12:00"
            onChange={(e) => setNewMealTime(e.target.value)}
          />
          <AiOutlinePlus size={30} onClick={addNewMeal} />
        </form>
      </Content>
    </>
  );
}

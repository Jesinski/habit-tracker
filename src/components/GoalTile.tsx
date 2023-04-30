import { PointerEvent, useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function GoalTile(props: { name: string; time: string }) {
  return (
    <section className="p-2 mx-2 my-2">
      <div className="flex justify-between relative touch-none bg-blue-200 rounded-xl">
        <span className="p-1 m-2 text-2xl">{props.name}</span>
        <span className="p-1 m-2 text-lg">{props.time}</span>
      </div>
    </section>
  );
}

"use client";
import formatDatetime from "@/lib/formatDatetime";
import getTileColor from "@/lib/getTileColor";
import { Tables } from "@/types/database.types";
import { PointerEvent, useState } from "react";
import { useSwipeable } from "react-swipeable";

export type UpdateTask = { id: number; completed: number };

export default function Tile(props: { task: Tables<"tasks"> }) {
  const [left, setLeft] = useState(0);
  const [currentLeft, setCurrentLeft] = useState(0);
  const [startX, setStartX] = useState(0);

  const [transition, setTransition] = useState({
    transition: "none",
  });
  const [bgColor, setBgColor] = useState({
    backgroundColor: getTileColor(props.task.completed),
  });

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      alert({ id: props.task.id, completed: -1 });
      setBgColor({ backgroundColor: "red" });
    },
    onSwipedRight: () => {
      setBgColor({ backgroundColor: "green" });
      alert({ id: props.task.id, completed: 1 });
    },
  });

  const onPointerDown = (e: PointerEvent) => {
    e.preventDefault();
    setStartX(e.pageX);
    setTransition({ transition: "" });
    setCurrentLeft(left);
  };

  const onPointerUp = (e: PointerEvent) => {
    e.preventDefault();
    setTransition({ transition: "left 0.5s" });
    setLeft(0);
  };

  const onPointerMove = (e: PointerEvent) => {
    e.preventDefault();
    const currentX = e.pageX;
    setLeft(currentLeft + currentX - startX);
  };

  return (
    <section className={`p-2 mx-2 my-2`}>
      <span className="my-1 text-xl">{formatDatetime(props.task.time)}</span>
      <div
        style={{ left: left, ...transition, ...bgColor }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        {...handlers}
        className="flex justify-between relative touch-none bg-blue-200 rounded-lg"
      >
        <span className="p-1 m-2 text-2xl">{props.task.name}</span>
        <span className="p-1 m-2 text-lg">{props.task.category}</span>
      </div>
    </section>
  );
}

import formatDatetime from "@/lib/formatDatetime";
import getTileColor from "@/lib/getTileColor";
import mutateFetcher from "@/lib/mutateFetcher";
import { tasks } from "@prisma/client";
import { PointerEvent, useState } from "react";
import { useSwipeable } from "react-swipeable";
import useSWRMutation from "swr/mutation";

export type UpdateTask = { id: number; completed: number };

export default function Tile(props: { task: tasks }) {
  const { trigger } = useSWRMutation("/api/putTask", mutateFetcher<UpdateTask>);

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
      trigger({ id: props.task.id, completed: -1 });
      setBgColor({ backgroundColor: "red" });
    },
    onSwipedRight: () => {
      setBgColor({ backgroundColor: "green" });
      trigger({ id: props.task.id, completed: 1 });
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
      <span className="my-1 text-xl">
        {formatDatetime(props.task.datetime)}
      </span>
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

import { PointerEvent, useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Tile(props: { name: string; time: string }) {
  const [left, setLeft] = useState(0);
  const [currentLeft, setCurrentLeft] = useState(0);
  const [startX, setStartX] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      console.log("Failed task!", eventData.event.target);
    },
    onSwipedRight: (eventData) => {
      console.log("Completed task!", eventData.event.target);
    },
  });

  const onPointerDown = (e: PointerEvent) => {
    e.preventDefault();
    setStartX(e.pageX);
    setCurrentLeft(left);
  };

  const move = (e: PointerEvent) => {
    e.preventDefault();
    const currentX = e.pageX;
    setLeft(currentLeft + currentX - startX);
  };

  return (
    <div
      style={{ left: left }}
      className={`relative touch-none`}
      onPointerDown={onPointerDown}
      onPointerMove={move}
      {...handlers}
    >
      <section className={`p-2 mx-2 my-2`}>
        <span className="my-1 text-xl"> {props.time} </span>
        <div className="flex justify-between bg-blue-200 rounded-xl">
          <span className="p-1 m-2 text-2xl">{props.name}</span>
          <span className="p-1 m-2 text-lg">Category</span>
        </div>
      </section>
    </div>
  );
}

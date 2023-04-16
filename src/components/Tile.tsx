import { useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Tile(props: { name: string; time: string }) {
  const [left, setLeft] = useState(0);

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      const delta = eventData.deltaX;
      setLeft(delta);
      console.log("Failed task!", eventData.event.target);
    },
    onSwipedRight: (eventData) => {
      const delta = eventData.deltaX;
      setLeft(delta);
      console.log("Completed task!", eventData.event.target);
    },
  });

  return (
    <div style={{ left: left }} className={`relative`} {...handlers}>
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

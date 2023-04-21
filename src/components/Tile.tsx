import { PointerEvent, useState } from "react";
import { useSwipeable } from "react-swipeable";

export default function Tile(props: { name: string; time: string }) {
  const [left, setLeft] = useState(0);
  const [currentLeft, setCurrentLeft] = useState(0);
  const [startX, setStartX] = useState(0);

  const [transition, setTransition] = useState({
    transition: "none",
  });
  const [bgColor, setBgColor] = useState({
    backgroundColor: "none",
  });

  const handlers = useSwipeable({
    onSwipedLeft: (eventData) => {
      setBgColor({ backgroundColor: "red" });
    },
    onSwipedRight: (eventData) => {
      setBgColor({ backgroundColor: "green" });
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

  const move = (e: PointerEvent) => {
    e.preventDefault();
    const currentX = e.pageX;
    setLeft(currentLeft + currentX - startX);
  };

  return (
    <section className={`p-2 mx-2 my-2`}>
      <span className="my-1 text-xl"> {props.time} </span>
      <div
        style={{ left: left, ...transition, ...bgColor }}
        onPointerDown={onPointerDown}
        onPointerMove={move}
        onPointerUp={onPointerUp}
        {...handlers}
        className="flex justify-between relative touch-none bg-blue-200 rounded-xl"
      >
        <span className="p-1 m-2 text-2xl">{props.name}</span>
        <span className="p-1 m-2 text-lg">Category</span>
      </div>
    </section>
  );
}

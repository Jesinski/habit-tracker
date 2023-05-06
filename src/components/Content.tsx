import { ReactNode, useLayoutEffect, useRef } from "react";

export default function Content(props: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    ref.current?.scrollTo({
      top: ref.current?.scrollHeight / 3,
      behavior: "smooth",
    });
  });

  return (
    <main ref={ref} className="overflow-y-auto overflow-x-hidden grow">
      {props.children}
    </main>
  );
}

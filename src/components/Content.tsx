"use client";
import { ReactNode, useLayoutEffect, useRef } from "react";

export default function Content(props: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // TODO: Refactor this behavior
    // This is a one-of-a-kind gambiarra.
    // If user is on Home page
    if (ref.current?.baseURI.endsWith("/")) {
      // Scroll to the middle, where the next tasks to be completed should be
      ref.current?.scrollTo({
        top: ref.current?.scrollHeight / 3,
        behavior: "smooth",
      });
    }
  });

  return (
    <main ref={ref} className="overflow-y-auto overflow-x-hidden grow">
      {props.children}
    </main>
  );
}

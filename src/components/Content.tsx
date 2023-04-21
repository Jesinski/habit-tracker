import { ReactNode } from "react";

export default function Content(props: { children: ReactNode }) {
  return (
    <main className="overflow-y-auto overflow-x-hidden grow">
      {props.children}
    </main>
  );
}

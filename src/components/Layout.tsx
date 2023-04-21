import { ReactNode } from "react";
import Footer from "./Footer";

export default function Layout(props: { children: ReactNode }) {
  return (
    <div className="flex flex-col h-screen">
      {props.children}
      <Footer />
    </div>
  );
}

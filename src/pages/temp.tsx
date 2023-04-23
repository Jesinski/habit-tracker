import Content from "@/components/Content";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import { useState } from "react";

export default function Temp() {
  const [hidden, setHidden] = useState(false);

  const onClick = () => {
    Notification.requestPermission().then((result) => {
      if (result === "granted") {
        setHidden(true);
      } else {
        setHidden(true);
      }
    });
  };

  return (
    <Layout>
      <Header title="Notification" />
      <Content>
        <button className="m-2 p-4 border-2 border-black" onClick={onClick}>
          Click Me!
        </button>
        <div className="m-2 w-full" hidden={!hidden}>
          Notification API works, thank you for helping me!
        </div>
        <div className="m-2 w-full" hidden={!hidden}>
          Please, screenshot this page and send it to me. <br />
          Have a good day!
        </div>
      </Content>
    </Layout>
  );
}

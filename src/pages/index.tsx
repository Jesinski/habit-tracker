import Content from "@/components/Content";
import Header from "@/components/Header";
import Layout from "@/components/Layout";
import Tile from "@/components/Tile";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Header title="Routine Center" />
      <Content>
        <Tile time="5:00 AM" name="Wake Up"></Tile>
        <Tile time="6:00 AM" name="Gym"></Tile>
        <Tile time="7:00 AM" name="1st Meal"></Tile>
        <Tile time="10:00 AM" name="2nd Meal"></Tile>
        <Tile time="12:00 PM" name="3rd Meal"></Tile>
        <Tile time="3:30 PM" name="4th Meal"></Tile>
        <Tile time="6:00 PM" name="3L Water"></Tile>
        <Tile time="7:15 PM" name="5th Meal"></Tile>
        <Tile time="7:00 PM" name="1st Meal"></Tile>
        <Tile time="9:00 PM" name="Sleep"></Tile>
      </Content>
    </Layout>
  );
}

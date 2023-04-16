import Tile from "@/components/Tile";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="p-2">
      <h1 className="font-extrabold uppercase text-3xl">Routine Center</h1>
      <div className="flex flex-col">
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
      </div>
    </div>
  );
}

import Link from "next/link";
import { BiHome, BiTachometer } from "react-icons/bi";

export default function Footer() {
  return (
    <footer className="flex-none bottom-0 flex justify-around h-14 max-h-14 w-full bg-gray-200 bg-red-800">
      <Link href="/" className="flex flex-col justify-center">
        <BiHome size={24} className="self-center flexgrow" />
        <button className="bg-transparent text-xs">Home</button>
      </Link>
      <Link href="/progress" className="flex flex-col justify-center">
        <BiTachometer size={24} className="self-center flexgrow" />
        <button className="bg-transparent text-xs">Progress</button>
      </Link>
    </footer>
  );
}

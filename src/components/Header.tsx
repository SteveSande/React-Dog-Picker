import { useAtom } from "jotai";
import { darkModeAtom } from "../utils/atom.ts";
import { useEffect, useState } from "react";

/** The Header component introduces the game to the user and provides instructions for playing. */
export default function Header() {
  const [darkMode] = useAtom(darkModeAtom);
  const [textColor, setTextColor] = useState<String>("text-black");

  useEffect(() => {
    if (darkMode) {
      setTextColor("text-white");
    } else {
      setTextColor("text-black");
    }
  }, [darkMode]);

  return (
    <div id="title" className=" cursor-default grow">
      <h1 className={`${textColor} text-center font-bold text-5xl`}>
        Find Your Dream Dog
      </h1>
    </div>
  );
}

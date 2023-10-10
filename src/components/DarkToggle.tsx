import { Button } from "ariakit";
import { useAtom } from "jotai";
import { darkModeAtom } from "../utils/atom.ts";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [btnProperties, setBtnProperties] = useState<String>(
    "bg-black text-white"
  );
  const [text, setText] = useState<String>("Dark");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    if (darkMode) {
      setBtnProperties("bg-white text-black");
      setText("Light");
    } else {
      setBtnProperties("bg-black text-white");
      setText("Dark");
    }
  }, [darkMode]);

  return (
    <div id="right-side" className="w-1/5 flex justify-end items-center">
      <Button
        id="dark-toggle"
        className={`${btnProperties} mr-10 h-fit font-bold text-white rounded-lg p-1 w-[55px]`}
        onClick={toggleDarkMode}
      >
        {text}
      </Button>
    </div>
  );
}

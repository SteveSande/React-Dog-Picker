import { Button } from "ariakit";
import { useAtom } from "jotai";
import { darkModeAtom } from "../utils/atom.ts";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [bgColor, setBgColor] = useState<String>("bg-black");
  const [textColor, setTextColor] = useState<String>("text-white");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());

    if (darkMode) {
      setBgColor("bg-white");
      setTextColor("text-black");
    } else {
      setBgColor("bg-black");
      setTextColor("text-white");
    }
  }, [darkMode]);

  return (
    <div id="right-side" className="w-1/5 flex justify-end items-center">
      <Button
        id="dark-toggle"
        className={`${bgColor} ${textColor} mr-10 h-fit font-bold text-white rounded-lg p-1`}
        onClick={toggleDarkMode}
      >
        Dark
      </Button>
    </div>
  );
}

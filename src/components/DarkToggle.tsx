import { Button } from "ariakit";
import { useAtom, useSetAtom } from "jotai";
import { darkModeAtom } from "../utils/atom.ts";
import { useLocalStorage } from "usehooks-ts";
import { useEffect, useState } from "react";

export default function DarkToggle() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [darkModeLS, setDarkModeLS] = useLocalStorage<boolean>(
    "darkMode",
    false
  );
  const [bgColor, setBgColor] = useState<String>("bg-black");
  const [textColor, setTextColor] = useState<String>("text-white");

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  useEffect(() => {
    if (darkMode) {
      setBgColor("bg-white");
      setTextColor("text-black");
    } else {
      setBgColor("bg-black");
      setTextColor("text-white");
    }

    setDarkModeLS(darkMode);
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

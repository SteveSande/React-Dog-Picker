import Blurb from "./components/Blurb";
import DarkToggle from "./components/DarkToggle";
import Game from "./components/Game";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { useAtom, useSetAtom } from "jotai";
import { darkModeAtom } from "./utils/atom.ts";

/** This is a fun game developed specifically to practice using React and other JavaScript libraries.
 * Other libraries I ended up using in the project were Tailwind and Storybook.
 */
export default function App() {
  const [background, setBackground] = useState<string>(""); // suggested attribution style <a href="https://www.freeiconspng.com/img/35432">hearts tumblr png</a>
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [bgColor, setBgColor] = useState<String>("bg-white");

  useEffect(() => {
    if (darkMode) {
      setBgColor("bg-black");
    } else {
      setBgColor("bg-white");
    }
  }, [darkMode]);

  return (
    <div id="page" className={`h-screen ${bgColor} ${background}`}>
      <header className="flex justify-center p-8 w-screen">
        <div className="w-1/5"></div>
        <Header />
        <DarkToggle />
      </header>
      <main className={`flex flex-col select-none`}>
        <Blurb />
        <Game setBackground={setBackground} />
      </main>
    </div>
  );
}

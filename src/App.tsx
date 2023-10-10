import Blurb from "./components/Blurb";
import DarkToggle from "./components/DarkToggle";
import Game from "./components/Game";
import Header from "./components/Header";
import { useState } from "react";

/** This is a fun game developed specifically to practice using React and other JavaScript libraries.
 * Other libraries I ended up using in the project were Tailwind and Storybook.
 */
export default function App() {
  const [background, setBackground] = useState<string>(""); // suggested attribution style <a href="https://www.freeiconspng.com/img/35432">hearts tumblr png</a>

  return (
    <div id="page">
      <header className="flex justify-center mb-8 mt-8 w-screen">
        <div className="w-1/5"></div>
        <Header />
        <DarkToggle />
      </header>
      <main className={`flex flex-col select-none h-screen ${background}`}>
        <Blurb />
        <Game setBackground={setBackground} />
      </main>
    </div>
  );
}

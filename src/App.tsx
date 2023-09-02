import Game from "./components/Game";
import Header from "./components/Header";
import { useState } from "react";

/** This is a fun game developed specifically to practice using React and other JavaScript libraries.
 * Other libraries I ended up using in the project were Tailwind and Storybook.
 */
export default function App() {
  const [background, setBackground] = useState<string>(""); // suggested attribution style <a href="https://www.freeiconspng.com/img/35432">hearts tumblr png</a>

  return (
    <div
      id="page"
      className={`flex flex-col select-none h-screen justify-center ${background}`}
    >
      <Header />
      <Game setBackground={setBackground} />
    </div>
  );
}

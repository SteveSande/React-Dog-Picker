import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";
import {useState} from "react"

export default function App() {
  const [background, setBackground] = useState<string>('');

  return (
    <div id='container' className={`flex flex-col select-none h-screen ${background}`}>
      <Header />
      <Game setBackground={setBackground}/>
    </div>
  );
}

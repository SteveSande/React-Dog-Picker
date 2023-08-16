import "./App.css";
import Game from "./components/Game";
import Header from "./components/Header";

export default function App() {
  return (
    <div id='container' className='flex flex-col select-none'>
      <Header />
      <Game />
    </div>
  );
}

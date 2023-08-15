import "./App.css";
import Game from "./components/game/Game";
import Header from "./components/header/Header";

export default function App() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Header />
      <Game />
    </div>
  );
}

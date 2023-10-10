import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import { darkModeAtom } from "../utils/atom";

export default function Blurb() {
  const [darkMode, setDarkMode] = useAtom(darkModeAtom);
  const [textColor, setTextColor] = useState<String>("text-black");

  useEffect(() => {
    if (darkMode) {
      setTextColor("text-white");
    } else {
      setTextColor("text-black");
    }
  }, [darkMode]);

  return (
    <div id="blurb">
      <p className={`${textColor} text-center text-xl m-5`}>
        Pick the dog that you connect with the most until you have seen all 10.
        <br />
        Once you have done a couple rounds you can do a special round to find
        your dream dog.
      </p>
    </div>
  );
}

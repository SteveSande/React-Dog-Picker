import { Button } from "ariakit";

export default function DarkToggle() {
  return (
    <div id="right-side" className="w-1/5 flex justify-end items-center">
      <Button
        id="dark-toggle"
        className="bg-black mr-10 h-fit font-bold text-white rounded-lg p-1"
      >
        Dark
      </Button>
    </div>
  );
}

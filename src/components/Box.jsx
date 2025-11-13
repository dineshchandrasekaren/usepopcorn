import { useState } from "react";
import ToggleButton from "./ToggleButton";

const Box = ({ element }) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <ToggleButton
        isOpen={isOpen}
        onClick={() => setIsOpen((open) => !open)}
      />
      {isOpen && element}
    </div>
  );
};

export default Box;

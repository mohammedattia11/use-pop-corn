import React, { useState } from "react";
import Button from "./Button";
const Box = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <Button onClick={() => setIsOpen(open => !open)}>
        {isOpen ? "–" : "+"}
      </Button>
      {isOpen && children}
    </div>
  );
};

export default Box;

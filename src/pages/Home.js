import React from "react";
import LeftPart from "./LeftPart";
import MiddlePart from "./MiddlePart";
import RightPart from "./RightPart";

const Home = () => {
  return (
    <div className="home">
      {/* Left Side Part render  */}
      <LeftPart />

      {/* Middle Part render  */}
      <MiddlePart />

      {/* Right Side Part render  */}
      <RightPart />
    </div>
  );
};

export default Home;

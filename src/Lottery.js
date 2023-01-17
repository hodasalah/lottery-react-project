import { useState } from "react";
import Ball from "./Ball";
const Lottery = ({ title, maxBalls, maxNum }) => {
  const [nums, setNums] = useState(Array.from({ length: maxBalls }));
  const generate = () => {
    setNums(nums.map((n) => Math.floor(Math.random() * maxNum) + 1));
  };

  return (
    <div className="lottery">
      <h2>{title}</h2>
      <div className="balls">
        {nums.map((n, i) => (
          <Ball key={i} num={n} />
        ))}
      </div>
      <button onClick={generate}>Generate numbers</button>
    </div>
  );
};
export default Lottery;
Lottery.defaultProps = {
  title: "Lotto",
  maxBalls: 6,
  maxNum: 40
};

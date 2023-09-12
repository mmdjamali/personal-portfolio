import { useEffect, useState } from "react";
import AnimateInOut from "../animate-in-out";

type props = {
  number: number;
  duration: number;
  minLen: number;
};

function NumberUp({ number, duration, minLen }: props) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    let fps: number;
    if (number < 4) {
      fps = number;
    } else {
      fps = 4;
    }
    let x = duration / fps;
    let increment = number / fps;

    let times = 0;

    let interval = setInterval(() => {
      if (times >= fps) {
        clearInterval(interval);
        return;
      }
      setCount((prev) => prev + increment);
      times += 1;
    }, x);

    return () => {
      clearInterval(interval);
    };

    /*eslint-disable*/
  }, []);

  return (
    <AnimateInOut>
      <span
        key={count}
        className={`
    `}
      >
        {(() => {
          const int = Math.round(count).toString();

          const len = minLen - int.length;

          return (
            Array(len < 0 ? 0 : len)
              .fill("0")
              .join("") + int
          );
        })()}
      </span>
    </AnimateInOut>
  );
}

export default NumberUp;

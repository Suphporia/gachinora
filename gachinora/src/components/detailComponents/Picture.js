import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const Picture = () => {
  const [index, setIndex] = useState(0);
  const [back, setBack] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onClickPlusIndex = () => {
    setIndex((prev) => (prev === 5 - 1 ? 0 : prev + 1));
    setBack(false);
  };

  const onClickMinusIndex = () => {
    setIndex((prev) => (prev === 0 ? 5 - 1 : prev - 1));
    setBack(true);
  };

  return (
    <div className="mx-20 my-2 flex justify-between items-center">
      <AnimatePresence
        custom={back}
        initial={false}
        onExitComplete={toggleLeaving}
      >
        <div onClick={onClickMinusIndex}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10 h-10 text-mainColor "
          >
            <path
              fill-rule="evenodd"
              d="M7.72 12.53a.75.75 0 010-1.06l7.5-7.5a.75.75 0 111.06 1.06L9.31 12l6.97 6.97a.75.75 0 11-1.06 1.06l-7.5-7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
        <div>{index}</div>
        <div onClick={onClickPlusIndex}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            class="w-10 h-10 text-mainColor "
          >
            <path
              fill-rule="evenodd"
              d="M16.28 11.47a.75.75 0 010 1.06l-7.5 7.5a.75.75 0 01-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 011.06-1.06l7.5 7.5z"
              clip-rule="evenodd"
            />
          </svg>
        </div>
      </AnimatePresence>
    </div>
  );
};

export default Picture;

"use client";
import React, { useEffect, useState } from "react";
import Countdown from "react-countdown";

const endingDate = new Date("2023-12-31");

const CountDown = () => {
  const [renderCheck, setRenderCheck] = useState(false);
  useEffect(() => {
    setRenderCheck(true);
  }, []);

  return (
    <>
      {renderCheck && (
        <Countdown
          className="font-bold text-5xl text-yellow-300"
          date={endingDate}
        />
      )}
    </>
  );
};

export default CountDown;

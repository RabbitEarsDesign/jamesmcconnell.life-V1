import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// COMPONENTS
import Experiments from "../expirements/Experiment";
// CSS
import classes from "./Clock.module.css";

function Clock() {
  const [displayTime, setDisplayTime] = useState("9:08");
  const [displayDate, setDisplayDate] = useState("10/12");
  const [hourStyle, setHourStyle] = useState(
    "transform: translate(-50%, -100%) rotate(30deg)"
  );
  const [minuteStyle, setMinuteStyle] = useState("");
  const [secondStyle, setSecondStyle] = useState("");

  useEffect(() => {
    const scale = (num, in_min, in_max, out_min, out_max) => {
      return (
        ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
      );
    };
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    function setTime() {
      console.log("clock");
      const time = new Date();
      const month = time.getMonth();
      const day = time.getDay();
      const date = time.getDate();
      const hours = time.getHours();
      const hoursForClock = hours % 12;
      const minutes = time.getMinutes();
      const seconds = time.getSeconds();
      const ampm = hours >= 12 ? "PM" : "AM";

      setHourStyle(
        `translate(-50%, -100%) rotate(${scale(
          hoursForClock,
          0,
          11,
          0,
          360
        )}deg)`
      );
      setMinuteStyle(
        `translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`
      );
      setSecondStyle(
        `translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`
      );

      setDisplayTime(
        `${hoursForClock}:${minutes < 10 ? `0${minutes}` : minutes} ${ampm}`
      );

      setDisplayDate(`${days[day]}, ${months[month]} ${date}`);
    }

    const interval = setInterval(setTime, 1000);

    return () => {
      clearInterval(interval);
    };
  });

  return (
    <div className={classes.clockContainer}>
      {/* <h1>Today is...</h1> */}
      <div className={classes.clock}>
        <div
          className={`${classes.needle} ${classes.hour}`}
          style={{ transform: hourStyle }}
        ></div>
        <div
          className={`${classes.needle} ${classes.minute}`}
          style={{ transform: minuteStyle }}
        ></div>
        <div
          className={`${classes.needle} ${classes.second}`}
          style={{ transform: secondStyle }}
        ></div>
        <div className={classes.centerPoint}></div>
      </div>

      <div className={classes.time}>{displayTime}</div>
      <div className={classes.date}>{displayDate}</div>
    </div>
  );
}

export default Clock;

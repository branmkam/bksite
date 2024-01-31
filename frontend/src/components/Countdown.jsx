import useInterval from "../utils/useInterval";
import ParseISO from "../data/ParseISO";
import { useState } from "react";

export default function Countdown(props) {
  let { time, className, seconds } = props;
  const [current, setCurrent] = useState(new Date());
  time = ParseISO(time);

  useInterval(() => {
    setCurrent(new Date());
  }, 1000);

  function zerofy(n) {
    return n >= 0 && n < 10 ? "0" + n : n;
  }

  let remaining = Math.floor((time - current) / 1000);
  let days = Math.floor(remaining / (24 * 60 * 60));
  remaining = remaining - days * 24 * 60 * 60;
  let hours = Math.floor(remaining / (60 * 60));
  remaining = remaining - hours * 60 * 60;
  let mins = Math.floor(remaining / 60);
  let secs = remaining - mins * 60;
  let finstr =
    days +
    ":" +
    zerofy(hours) +
    ":" +
    zerofy(mins) +
    (seconds && ":" + zerofy(secs));

  return time < current ? (
    <p className={className}>00:00:00{seconds && ":00"}</p>
  ) : (
    <p className={className}>{finstr}</p>
  );
}

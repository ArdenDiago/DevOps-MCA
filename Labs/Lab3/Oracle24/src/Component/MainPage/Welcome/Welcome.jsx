import React, { useState, useEffect } from "react";
import "./welcome.css";

export default function Welcome() {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsActive((prevIsActive) => !prevIsActive);
    }, 3000);

    // Clear the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="welcome">
      <ul className={isActive ? "active" : ""}>
        <li data-letter="W"></li>
        <li data-letter="E"></li>
        <li data-letter="L"></li>
        <li data-letter="C"></li>
        <li data-letter="O"></li>
        <li data-letter="M"></li>
        <li data-letter="E"></li>
        <br />
        <li data-letter="T"></li>
        <li data-letter="O"></li>
      </ul>
    </div>
  );
}

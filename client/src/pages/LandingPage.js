import "../styling/landingPage.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function LandingPage() {
  const ref = useRef(null);

  useEffect(() => {
    // const wrapper = document.getElementById("wrapper");
    const wrapper = ref.current;
    const interval = setInterval(() => {
      const wrapper = ref.current;
      const index = uniqueRand(0, combinations.length - 1, prev),
        combination = combinations[index];
      console.log("wrapper", wrapper);
      wrapper.dataset.configuration = combination.configuration;
      wrapper.dataset.roundness = combination.roundness;
      prev = index;
    }, 3000);
    return () => {
      console.log("clean first");
      clearInterval(interval);
      console.log("cleaning done, run again");
    };
  }, []);

  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

  const uniqueRand = (min, max, prev) => {
    let next = prev;

    while (prev === next) next = rand(min, max);

    return next;
  };

  const combinations = [
    { configuration: 1, roundness: 1 },
    { configuration: 1, roundness: 2 },
    { configuration: 1, roundness: 4 },
    { configuration: 2, roundness: 2 },
    { configuration: 2, roundness: 3 },
    { configuration: 3, roundness: 3 },
  ];

  let prev = 0;

  return (
    <div>
      <div id="wrapper" ref={ref} data-configuration="1" data-roundness="1">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <Link to="/quotes" style={{ textDecoration: "none", color: "black" }} className="appName">
        INSPIRE ME
      </Link>
    </div>
  );
}

export default LandingPage;

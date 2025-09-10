import { useEffect } from "react";
import { useState } from "react";

function App() {
  const arr = ["start", "pause", "reset"];
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  const [stopwatch, setStopwatch] = useState();

  const handleClick = (action) => {
    if (action === "start") {
      setStopwatch(
        setInterval(() => {
          setSecond((prev) => {
            if (prev < 59) {
              return prev + 1;
            }

            setMinute((mprev) => {
              if (mprev == 59) {
                setHour((hprev) => {
                  return hprev + 1;
                });
                return 0;
              }

              return mprev + 1;
            });

            return 0;
          });
        }, 100)
      );
    } else if (action == "pause") {
      clearInterval(stopwatch);
    } else {
      clearInterval(stopwatch);
      setHour(0);
      setMinute(0);
      setSecond(0);
    }
  };

  return (
    <div id="container">
      <h1>
        {hour > 9 ? hour : `0${hour}`} :{minute > 9 ? minute : `0${minute}`} :
        {second > 9 ? second : `0${second}`}
      </h1>
      <div id="btn-holder">
        {arr.map((curele) => (
          <button
            id={curele}
            onClick={() => {
              handleClick(curele);
            }}
          >
            {curele}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

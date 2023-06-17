import React, { useState } from "react";

function App() {
  setInterval(updateTime, 1000);
  let time = new Date().toLocaleTimeString();
  const [timer, setTime] = useState(time);

  function updateTime() {
    time = new Date().toLocaleTimeString();
    setTime(time);
  }

  return (
    <div className="container">
      <h1>{timer}</h1>

      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;

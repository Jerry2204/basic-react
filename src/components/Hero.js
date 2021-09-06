import { React, useState } from "react";

export default function Hero() {
  const [number, setNumber] = useState(1);

  const addNumber = () => setNumber(number + 1);

  return (
    <div className="bg-primary">
      <button className="btn btn-danger" onClick={addNumber}>
        Button
      </button>
      <h1>Ini adalah component {number}</h1>
    </div>
  );
}

import React, { useEffect, useRef, useState } from "react";

export const Task1 = () => {
  const [data, setdata] = useState([
    "Nishank",
    "Sandeep",
    1,
    4,
    "khushi",
    20,
    39,
  ]);
  const [firstValue, setFirstValue] = useState("");
  const [SecondValue, setSecondValue] = useState("");
  const [activeInput, setActiveInput] = useState(null); // Track focused input

  const inputref = useRef(null);
  const Secondinputref = useRef(null);

  // Focus on component mount
  useEffect(() => {
    if (inputref.current) {
      inputref.current.focus();
    }
  }, []);

  const handleOnclick = (item, i) => {
    if (activeInput === "first") {
      setFirstValue(item);
    } else if (activeInput === "second") {
      setSecondValue(item);
    }

    setdata(data.filter((_, index) => index !== i));
  };

  return (
    <div
      style={{
        border: "1px solid black",
        height: "500px",
        width: "500px",
        display: "flex",
        flexDirection: "column",
        padding: 10,
      }}
    >
      <h1>Fill the following Input</h1>

      <div style={{ display: "flex", flexDirection: "row", gap: 4 }}>
        <h1>Fill:</h1>
        <input
          ref={inputref}
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
          onFocus={() => setActiveInput("first")}
          style={{ height: "30px", marginTop: "50px" }}
        />
        <input
          ref={Secondinputref}
          value={SecondValue}
          onChange={(e) => setSecondValue(e.target.value)}
          onFocus={() => setActiveInput("second")}
          style={{ height: "30px", marginTop: "50px" }}
        />
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "row",
          gap: 4,
          margin: 10,
          flexWrap: "wrap",
        }}
      >
        {data.map((item, index) => (
          <div
            key={index}
            style={{
              border: "1px solid black",
              width: "200px",
              padding: "5px",
              textAlign: "center",
              cursor: "pointer",
            }}
            onClick={() => handleOnclick(item, index)}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

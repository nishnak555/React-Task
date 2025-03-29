import React, { useEffect, useRef, useState } from "react";

export const Task1 = () => {
  const [data, setData] = useState([
    "Nishank",
    "Sandeep",
    1,
    4,
    "Khushi",
    20,
    39,
  ]);
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [activeInput, setActiveInput] = useState(null); // Track focused input

  const inputRef = useRef(null);

  // Focus on first input field on component mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleOnClick = (item, index) => {
    if (activeInput === "first" && firstValue === "") {
      setFirstValue(item);
    } else if (activeInput === "second" && secondValue === "") {
      setSecondValue(item);
    } else {
      return; // Prevent selecting if both inputs are filled
    }

    // Remove selected item from list safely
    setData((prevData) => prevData.filter((_, i) => i !== index));    // React batches state updates. By using a function inside setData, React will always apply the most recent version of data.
  };

  return (
    <div style={styles.container}>
      <h1>Fill the following Input</h1>

      <div style={styles.inputContainer}>
        <h2>Fill:</h2>
        <input
          ref={inputRef}
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
          onFocus={() => setActiveInput("first")}
          style={styles.input}
        />
        <input
          value={secondValue}
          onChange={(e) => setSecondValue(e.target.value)}
          onFocus={() => setActiveInput("second")}
          style={styles.input}
        />
      </div>

      <div style={styles.cardContainer}>
        {data.map((item, index) => (
          <div key={index} style={styles.card} onClick={() => handleOnClick(item, index)}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    border: "1px solid black",
    height: "500px",
    width: "500px",
    display: "flex",
    flexDirection: "column",
    padding: "10px",
    alignItems: "center",
  },
  inputContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  input: {
    height: "30px",
    padding: "5px",
    border: "1px solid black",
    borderRadius: "5px",
    outline: "none",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "10px",
    justifyContent: "center",
  },
  card: {
    border: "1px solid black",
    width: "100px",
    padding: "5px",
    textAlign: "center",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "0.3s",
  },
};


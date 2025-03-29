import React, { useEffect, useRef, useState } from "react";

export const Task1 = () => {
  const initialData = ["Nishank", "Sandeep", 1, 4, "Khushi", 20, 39];
  const [data, setData] = useState(initialData);
  const [firstValue, setFirstValue] = useState("");
  const [secondValue, setSecondValue] = useState("");
  const [activeInput, setActiveInput] = useState("first"); // Track focused input
  const firstInputRef = useRef(null);
  const secondInputRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const [submitUi, setSubmitUi] = useState(false);

  // Focus on first input field on component mount
  useEffect(() => {
    if (activeInput === "first" && firstInputRef.current) {
      firstInputRef.current.focus();
    } else if (activeInput === "second" && secondInputRef.current) {
      secondInputRef.current.focus();
    }
  }, [activeInput]);

  const handleOnClick = (item, index) => {
    if (firstValue !== "" && secondValue !== "") {
      return;
    }
    if (activeInput === "first") {
      setFirstValue(item);
      setActiveInput("second"); // Move focus to second input
    } else if (activeInput === "second") {
      setSecondValue(item);
    }

    setData((prevData) => prevData.filter((_, i) => i !== index)); // React batches state updates. By using a function inside setData, React will always apply the most recent version of data.
  };

  const handleSubmit = () => {
    const confirmed = confirm(`key: ${firstValue}, value: ${secondValue}`);
    if (confirmed) {
      setSubmitUi(true);
    }
  };

  const handleRefresh = () => {
    setFirstValue("");
    setSecondValue("");
    setData(initialData);
    setActiveInput("first");
    firstInputRef.current?.focus();
  };

  useEffect(() => {
    setDisabled(!(firstValue !== "" && secondValue !== ""));
  }, [firstValue, secondValue]);

  return (
    <>
    {
      !submitUi &&    <div style={styles.container}>
      <h1>Fill the following Input</h1>

      <div style={styles.inputContainer}>
        <h2>Fill:</h2>
        <input
          ref={firstInputRef}
          value={firstValue}
          onChange={(e) => setFirstValue(e.target.value)}
          onFocus={() => setActiveInput("first")}
          style={styles.input}
        />
        <input
          ref={secondInputRef}
          value={secondValue}
          onChange={(e) => setSecondValue(e.target.value)}
          onFocus={() => setActiveInput("second")}
          style={styles.input}
        />
      </div>

      <div style={styles.cardContainer}>
        {data.map((item, index) => (
          <div
            key={index}
            style={styles.card}
            onClick={() => handleOnClick(item, index)}
          >
            {item}
          </div>
        ))}
      </div>
      <div style={styles.btns}>
        <button
          disabled={disabled}
          style={disabled ? { background: "#A9A9A9" } : styles.btn}
          onClick={() => handleSubmit()}
        >
          Submit
        </button>
        <button style={styles.btn} onClick={() => handleRefresh()}>
          Refresh
        </button>
      </div>
    </div>
    }
    

      <div>{submitUi && <h1>Thanks for Submitting first Task</h1>}</div>
    </>
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
    justifyContent: "center",
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
  },
  btns: {
    display: "flex",
    flexDirection: "row",
    padding: "30px",
    gap: 10,
  },

  btn: {
    color: "white",
    background: "black",
    padding: "10px",
    cursor: "pointer",
  },
};

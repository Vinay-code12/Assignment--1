import React, { Component, useState } from "react";

const styles = {
  container: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    padding: "20px",
    maxWidth: "600px",
    margin: "auto",
  },
  mainHeading: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#333",
  },
  row: {
    display: "flex",
    justifyContent: "space-around",
    gap: "20px",
  },
  counterBox: {
    flex: 1,
    backgroundColor: "#f0f4f8",
    borderRadius: "10px",
    padding: "20px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  heading: {
    marginBottom: "15px",
    color: "#007acc",
  },
  number: {
    fontSize: "48px",
    margin: "20px 0",
    color: "#222",
  },
  button: {
    fontSize: "24px",
    padding: "10px 20px",
    margin: "0 10px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007acc",
    color: "white",
    transition: "background-color 0.3s ease",
  },
  buttonDisabled: {
    backgroundColor: "#a0a0a0",
    cursor: "not-allowed",
  },
};

// Class Component Counter
class CounterClass extends Component {
  state = {
    count: 0,
  };

  increment = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  decrement = () => {
    this.setState((prev) => ({
      count: prev.count > 0 ? prev.count - 1 : 0,
    }));
  };

  render() {
    const { count } = this.state;
    return (
      <div style={styles.counterBox}>
        <h2 style={styles.heading}>Class Component Counter</h2>
        <div style={styles.number}>{count}</div>
        <button
          style={{
            ...styles.button,
            ...(count === 0 ? styles.buttonDisabled : {}),
          }}
          onClick={this.decrement}
          disabled={count === 0}
        >
          -
        </button>
        <button style={styles.button} onClick={this.increment}>
          +
        </button>
      </div>
    );
  }
}

// Functional Component Counter
function CounterFunction() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((c) => c + 1);
  const decrement = () => setCount((c) => (c > 0 ? c - 1 : 0));

  return (
    <div style={styles.counterBox}>
      <h2 style={styles.heading}>Functional Component Counter</h2>
      <div style={styles.number}>{count}</div>
      <button
        style={{
          ...styles.button,
          ...(count === 0 ? styles.buttonDisabled : {}),
        }}
        onClick={decrement}
        disabled={count === 0}
      >
        -
      </button>
      <button style={styles.button} onClick={increment}>
        +
      </button>
    </div>
  );
}

// Main App Component
export default function App() {
  return (
    <div style={styles.container}>
      <h1 style={styles.mainHeading}>Assignment-2 Counter Application</h1>
      <div style={styles.row}>
        <CounterClass />
        <CounterFunction />
      </div>
    </div>
  );
}

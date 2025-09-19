function Toggle({ darkMode, toggleMode }) {
  const buttonStyle = {
    padding: "8px 15px",
    backgroundColor: darkMode ? "#f5f5f5" : "#1e1e1e",
    color: darkMode ? "#000000" : "#ffffff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    marginBottom: "20px",
  };

  return (
    <button onClick={toggleMode} style={buttonStyle}>
      {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}

export default Toggle;

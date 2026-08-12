import { useState } from "react";
import { useTaskContext } from "../Contexts/TaskContext";
import AddSuccess from "../features/AddSuccess.js";

export default function Footer() {
  console.log(useTaskContext());
  const [inputValue, setInputValue] = useState("");
  const [showAddSuccess, setShowAddSuccess] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const { addTask } = useTaskContext();
  function handleAddTask() {
    if (inputValue.trim() !== "") {
      addTask(inputValue);
      setInputValue("");
      setTimeout(() => {
        setShowAddSuccess(true);
      }, 100);
    }
    setTimeout(() => {
      setShowAddSuccess(false);
    }, 3000);
  }
  const footerStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    width: "100%",
  };
  const buttonStyle = {
    backgroundColor: "rgb(133, 30, 30)",
    color: "white",
    padding: "30px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    cursor: "pointer",
    width: "20%",
    fontSize: "15px",
  };
  const inputStyle = {
    padding: "10px",
    border: "1px solid rgba(231, 221, 221, 0.74)",
    borderRadius: "5px",
    width: "80%",
  };
  return (
    <div style={footerStyle}>
      <button style={buttonStyle} onClick={handleAddTask}>
        اضافة
      </button>
      <input
        type="text"
        placeholder="عنوان المهمة"
        style={inputStyle}
        value={inputValue}
        onChange={handleInputChange}
      />
      {showAddSuccess && <AddSuccess />}
    </div>
  );
}

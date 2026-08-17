import { useState } from "react";
// import { useTaskContext } from "../Contexts/TaskContext";
import AddSuccess from "../features/AddSuccess.jsx";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux-features/todosSlice";

export default function Footer() {
  const dispatch = useDispatch();
  console.log("dispatch in Footer", addTodo);
  // console.log(useTaskContext());
  const [inputValue, setInputValue] = useState("");
  const [showAddSuccess, setShowAddSuccess] = useState(false);
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  // const { addTask } = useTaskContext();
  function handleAddTask() {
    if (inputValue.trim() !== "") {
      dispatch(addTodo({ taskName: inputValue }));
      setInputValue("");
      setTimeout(() => {
        setShowAddSuccess(true);
      }, 100);
    }
    setTimeout(() => {
      setShowAddSuccess(false);
    }, 3000);
  }

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
  const footerStyle = {
    display: "flex",
    gap: "10px",
    marginTop: "10px",
    width: "100%",
  };
  return (
    <div className="flex gap-2.5 mt-2.5 w-full">
      <button
        className={`${inputValue.length > 0 ? "bg-green-500" : "bg-gray-500"} rounded-full p-6 transition-all duration-500 hover:scale-110 text-xl font-bold text-white w-1/6`}
        onClick={handleAddTask}
      >
        +
      </button>
      <input
        type="text"
        placeholder="عنوان المهمة"
        className="border bg-white border-gray-300 rounded-full p-4 w-4/5 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-300"
        value={inputValue}
        onChange={handleInputChange}
      />
      {showAddSuccess && <AddSuccess />}
    </div>
  );
}

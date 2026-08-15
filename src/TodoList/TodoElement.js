import { useState } from "react";
// import { useTaskContext } from "../Contexts/TaskContext";
import EditPopUp from "../features/EditPopUp";
import SaveSuccess from "../features/SaveSuccess";
import { useDispatch } from "react-redux";
import { handleCompleted, removeTodo } from "../redux-features/todosSlice";
export default function TodoElement({ id, taskName, status, buttonColor }) {
  const dispatch = useDispatch();
  console.log("dispatch in TodoElement", handleCompleted, removeTodo);
  // console.log(useTaskContext());
  // console.log("EditPopUp import:", EditPopUp);
  // console.log("SaveSuccess import:", SaveSuccess);
  // const { deleteTask, handleCompleted } = useTaskContext();
  const [isCompleted, setIsCompleted] = useState(status);
  const [isEditPopUpOpen, setIsEditPopUpOpen] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  function handleComplete() {
    setIsCompleted(!isCompleted);
    dispatch(handleCompleted({ id, isCompleted: !isCompleted }));

    // if (!isCompleted) {
    //   completedTaskshandler(id);
    // } else {
    //   notCompletedTaskshandler(id);
    // }
  }

  const todoElementStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "rgb(26, 48, 150)",
    boxShadow: "0px 4px 6px rgba(15, 5, 5, 0.6)",
  };
  // console.log("the button color is", buttonColor);
  const achievedStyle = {
    backgroundColor: buttonColor,
  };
  function handleDelete() {
    dispatch(removeTodo(id));
  }
  function handleEdit() {
    setIsEditPopUpOpen(true);
  }
  function handleSaveSuccess() {
    setTimeout(() => {
      setShowSaveSuccess(true);
    }, 100);
    setTimeout(() => {
      setShowSaveSuccess(false);
    }, 3000);
  }

  return (
    <div>
      <div style={todoElementStyle} dir="rtl">
        <div>
          <h2>{taskName}</h2>
        </div>
        <div dir="ltr" style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleEdit}>تعديل</button>
          <button onClick={handleDelete}>حذف</button>
          <button style={achievedStyle} onClick={handleComplete}>
            منجز
          </button>
        </div>
      </div>
      <div>
        {isEditPopUpOpen && (
          <EditPopUp
            id={id}
            currentTitle={taskName}
            handlePopUpClose={setIsEditPopUpOpen}
            handleSaveSuccess={handleSaveSuccess}
          />
        )}
        {showSaveSuccess && <SaveSuccess />}
      </div>
    </div>
  );
}

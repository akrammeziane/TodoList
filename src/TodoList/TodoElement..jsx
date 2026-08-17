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

  // console.log("the button color is", buttonColor);

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

  //  const todoElementStyle = {
  //   display: "flex",
  //   justifyContent: "space-between",
  //   alignItems: "center",
  //   padding: "10px",
  //   border: "1px solid rgba(0, 0, 0, 0.2)",
  //   borderRadius: "5px",
  //   marginBottom: "10px",
  //   backgroundColor: "rgb(26, 48, 150)",
  //   boxShadow: "0px 4px 6px rgba(15, 5, 5, 0.6)",
  // };
  // style={todoElementStyle}
  // const achievedStyle = {
  //   backgroundColor: buttonColor,
  // };
  // style={achievedStyle}
  console.log("the button color is", buttonColor);
  return (
    <div>
      <div
        className="flex flex-wrap justify-between items-center p-2.5 border-0 rounded-xl mb-2.5 bg-indigo-800 shadow-md shadow-black/45 hover:p-5 transition-all duration-300 ease-in-out"
        dir="rtl"
      >
        <div>
          <h2 className="text-amber-100 text-3xl text-shadow-2xs text-shadow-slate-950">
            {taskName}
          </h2>
        </div>
        <div dir="ltr" className="flex gap-2.5">
          <button
            className="p-2.5 border border-0 rounded-2xl text-zinc-950 font-extrabold bg-white transition-all duration-300 hover:bg-amber-300 "
            onClick={handleEdit}
          >
            تعديل
          </button>
          <button
            className="p-2.5 border border-0 rounded-2xl text-zinc-950 font-extrabold bg-white transition-all duration-300 hover:bg-red-700"
            onClick={handleDelete}
          >
            حذف
          </button>
          <button
            className={`p-2.5 border border-0 rounded-2xl text-zinc-950 font-extrabold ${buttonColor} transition-all duration-300 `}
            onClick={handleComplete}
          >
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

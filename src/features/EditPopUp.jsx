import { useState } from "react";
// import { useTaskContext } from "../Contexts/TaskContext";
import { useDispatch } from "react-redux";
import { editTodo } from "../redux-features/todosSlice";
export default function EditPopUp({
  id,
  currentTitle,
  handlePopUpClose,
  handleSaveSuccess,
}) {
  const dispatch = useDispatch();
  console.log("dispatch in EditPopUp", editTodo);
  // console.log(useTaskContext());
  // console.log("the current title is", currentTitle);
  const [inputValue, setInputValue] = useState(currentTitle);
  // const { editTask } = useTaskContext();
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
  const popUpStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(26, 24, 24, 0.37)",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    width: "100vw",
    height: "100vh",
  };
  const popUpContentStyle = {
    display: "flex",
    justifyContent: "space-between",
    width: "300px",
    padding: "20px",
    backgroundColor: "white",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    height: "auto",
    position: "relative",
  };
  const buttonStyle = {
    backgroundColor: "rgb(133, 30, 30)",
    color: "white",
    padding: "10px",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    borderRadius: "5px",
    cursor: "pointer",
    position: "absolute",
    bottom: "20px",
    left: "10px",
    width: "20%",
  };
  const inputStyle = {
    padding: "10px",
    border: "1px solid rgba(87, 81, 81, 0.85)",
    borderRadius: "5px",
    width: "100%",
  };
  function handleClickInside(event) {
    // console.log(event);
    event.stopPropagation();
  }
  function handleClose() {
    handlePopUpClose(false);
  }
  function handleSave() {
    if (inputValue.trim() === "") {
      alert("يرجى إدخال عنوان المهمة");
      return;
    }
    dispatch(editTodo({ id, newTitle: inputValue }));
    handleSaveSuccess();
    handlePopUpClose(false);
  }

  return (
    <div onClick={handleClose} style={popUpStyle}>
      <div style={popUpContentStyle} onClick={(e) => handleClickInside(e)}>
        <div>
          <h2>تعديل المهمة</h2>
          <input
            type="text"
            value={inputValue}
            onChange={handleInputChange}
            style={inputStyle}
          />
        </div>
        <div>
          <button style={buttonStyle} onClick={handleSave}>
            حفظ
          </button>
        </div>
      </div>
    </div>
  );
}

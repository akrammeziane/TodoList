import TodoElement from "./TodoElement";
import { useTaskContext } from "../Contexts/TaskContext";
// import { useContext } from "react";
export default function TodoList() {
  const { tasks = [] } = useTaskContext() || {};
  const todoListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    marginTop: "20px",
  };
  console.log("tasks", tasks);

  const TaskList = tasks.map((task) => {
    if (!task || task.title.trim() === "") return null;
    return (
      <TodoElement
        key={task.id}
        id={task.id}
        taskName={task.title}
        status={task.isComplete}
        buttonColor={task.buttonColor}
      />
    );
  });
  return (
    <div style={todoListStyle} dir="rtl">
      {TaskList.slice(0, 3)}
    </div>
  );
}

import TodoElement from "../TodoList/TodoElement.";
// import { useTaskContext } from "../Contexts/TaskContext";
import { useSelector } from "react-redux";
// import { useContext } from "react";
export default function AllTasks() {
  const tasks = useSelector((state) => state.todos.todos) || [];
  console.log("tasks in AllTasks:", tasks);
  // console.log(useTaskContext());
  // const { tasks = [] } = useTaskContext() || {};
  // tasks.forEach((t) => console.log("task in AllTasks:", t.id, t.buttonColor));
  const todoListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    marginTop: "20px",
  };
  // console.log("tasks", tasks);

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

import TodoElement from "../TodoList/TodoElement";
// import { useTaskContext } from "../Contexts/TaskContext";
// import { useContext } from "react";
import { useSelector } from "react-redux";
import { useMemo } from "react";
export default function NotAchievedTasks() {
  const tasks = useSelector((state) => state.todos.todos) || [];
  console.log("tasks in NotAchievedTasks:", tasks);

  // console.log(useTaskContext());
  // const { notAchievedTasks = [] } = useTaskContext() || {};
  const notAchievedTasks = useMemo(() => {
    console.log("calling notAchievedTasks filter");
    return tasks.filter((task) => !task.isComplete);
  }, [tasks]);
  const todoListStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
    marginTop: "20px",
  };

  const TaskList = notAchievedTasks.map((task) => {
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

import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// import TodoList from "./TodoList/TodoList";
import { TaskProvider } from "./Contexts/TaskContext";
// import { useState, useEffect, useMemo } from "react";
import { Routes, Route } from "react-router-dom";
import AchievedTasks from "./Pages/AchievedTasks";
import NotAchievedTasks from "./Pages/NotAchievedTasks";
import AllTasks from "./Pages/AllTasks";
function App() {
  // const AppStyle = {
  //   backgroundColor: "White",
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   borderRadius: "5px",
  //   border: "1px solid rgba(0, 0, 0, 0.2)",
  //   width: "40%",
  //   margin: "auto",
  //   marginTop: "50px",
  //   marginBottom: "50px",
  //   padding: "10px",
  // };
  // style={AppStyle}
  return (
    <TaskProvider>
      <div className="bg-white flex flex-col items-center rounded-2xl border border-solid border-gray-300 w-2/5 m-auto mt-[50px] mb-[50px] p-10 ">
        <Header />
        <Routes>
          <Route path="/achieved-tasks" element={<AchievedTasks />} />
          <Route path="/not-achieved-tasks" element={<NotAchievedTasks />} />
          <Route path="/" element={<AllTasks />} />
        </Routes>
        <Footer />
      </div>
    </TaskProvider>
  );
}

export default App;

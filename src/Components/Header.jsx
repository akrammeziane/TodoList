import { Link } from "react-router-dom";
export default function Header() {
  // const headerStyle = {
  //   display: "flex",
  //   flexDirection: "column",
  //   alignItems: "center",
  //   gap: "10px",
  // };
  // const buttonStyle = {
  //   backgroundColor: "white",
  //   border: "1px solid rgba(0, 0, 0, 0.2)",
  //   padding: "10px",
  //   cursor: "pointer",
  //   color: "purple",
  // };
  return (
    <div className="flex flex-col items-center gap-2">
      <h1 className="text-[80px] font-bold text-gray-950 mb-4">مهامي</h1>
      <div className="flex flex-row gap-0.5">
        <Link to="/not-achieved-tasks">
          <button className="bg-white border border-olive-900/45 rounded-lg shadow text-mauve-700 p-2.5 hover:bg-orange-400 transition-all duration-300">
            غير منجز
          </button>
        </Link>
        <Link to="/achieved-tasks">
          <button className="bg-white border border-olive-900/45 rounded-lg shadow text-mauve-700 p-2.5 hover:bg-green-400 transition-all duration-300">
            منجز
          </button>
        </Link>
        <Link to="/">
          <button className="bg-white border border-olive-900/45 rounded-lg shadow text-mauve-700 p-2.5 hover:bg-blue-400 transition-all duration-300">
            الكل
          </button>
        </Link>
      </div>
    </div>
  );
}

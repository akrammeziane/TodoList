import { Link } from "react-router-dom";
export default function Header() {
  const headerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  };
  const buttonStyle = {
    backgroundColor: "white",
    border: "1px solid rgba(0, 0, 0, 0.2)",
    padding: "10px",
    cursor: "pointer",
    color: "purple",
  };
  return (
    <div style={headerStyle}>
      <h1 style={{ fontSize: "80px", marginTop: "0px" }}>مهامي</h1>
      <div>
        <Link to="/not-achieved-tasks">
          <button style={buttonStyle}>غير منجز</button>
        </Link>
        <Link to="/achieved-tasks">
          <button style={buttonStyle}>منجز</button>
        </Link>
        <Link to="/">
          <button style={buttonStyle}>الكل</button>
        </Link>
      </div>
    </div>
  );
}

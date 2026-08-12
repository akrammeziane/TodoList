export default function AddSuccess() {
  const containerStyle = {
    backgroundColor: "green",
    position: "absolute",
    bottom: "10px",
    left: "20px",
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    zIndex: "1000",
  };
  const textStyle = {
    fontSize: "20px",
    color: "white",
  };
  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>تمت الإضافة بنجاح</h1>
    </div>
  );
}

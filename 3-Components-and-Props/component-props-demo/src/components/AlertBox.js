function AlertBox({ message, color }) {
  return (
    <div
      style={{
        padding: "12px 20px",
        borderRadius: "8px",
        margin: "10px 0",
        color: "#fff",
        backgroundColor: color,
        fontWeight: "500"
      }}
    >
      {message}
    </div>
  );
}

export default AlertBox;

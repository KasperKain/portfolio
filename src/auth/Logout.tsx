import React from "react";

const Logout: React.FC = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");

    window.location.reload();
  };

  const token = localStorage.getItem("token");
  if (!token) {
    return null;
  }

  return (
    <button
      style={{
        position: "absolute",
        top: "10px",
        right: "26px",

        padding: "10px",
        background: "gray",
        color: "#fff",
        borderRadius: "10%",
        cursor: "pointer",
      }}
      onClick={handleLogout}
    >
      Logout
    </button>
  );
};

export default Logout;

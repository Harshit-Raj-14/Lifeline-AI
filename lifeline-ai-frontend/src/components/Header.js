import React from "react";
import "./Header.css";

function Header({ onSectionChange }) {
  return (
    <div className="header">
      <h1>LifeLine AI</h1>
      <button className="button" onClick={() => alert("Feature coming soon!")}>
        Record / Upload Audio
      </button>
    </div>
  );
}

export default Header;

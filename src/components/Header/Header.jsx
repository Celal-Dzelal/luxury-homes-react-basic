import React from "react";
import HeaderStyle from "./Header.module.css";

function Header() {
  return (
    <div className={HeaderStyle.header}>
      <h1 className={HeaderStyle.title}>Luxury Homes</h1>
      <button className={HeaderStyle.button}>3 + 1</button>
      <button className={HeaderStyle.button}>4 + 2</button>
      <button className={HeaderStyle.button}>5 + 2</button>
      <button className={HeaderStyle.button}>6 + 2</button>
    </div>
  );
}

export default Header;

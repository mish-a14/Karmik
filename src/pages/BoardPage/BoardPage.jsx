import React, { Component } from "react";
import { Link } from "react-router-dom";
import Board from "../../Components/Board/Board";

function BoardPage(props) {
  return (
    <>
      <nav className="nav">
        <div className="logo">
          <Link to="/home">karmik</Link>
        </div>
        <div className="links">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </div>
      </nav>
      <Board />
    </>
  );
}

export default BoardPage;

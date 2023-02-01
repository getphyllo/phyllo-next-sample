import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <Link className="navbar-brand" href="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand" href="/accounts">
              Accounts
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

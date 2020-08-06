import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <h1 className='logo'>Curiosum</h1>
      <ul className='links'>
        <li className='item'>
          <Link>About</Link>
        </li>
        <li className='item'>
          <Link>Submit Your Question</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

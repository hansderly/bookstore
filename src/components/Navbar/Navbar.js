import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <header>
    <div>
      <div>Bookstore CMS</div>
      <nav>
        <ul>
          <li>
            <Link to="/books">Books</Link>
          </li>
          <li>
            <Link to="/category">Category</Link>
          </li>
        </ul>
      </nav>
    </div>
    <div>icon</div>
  </header>
);

export default Navbar;

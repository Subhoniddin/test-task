import { NavLink } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <header className="main_header">
      <div className="header-wrapper">
        <div className="header_item">
          <NavLink to="/home">
            <span className="span">Home</span> 
          </NavLink>
        </div>
        <div className="header_item">
          <NavLink to="/posts">
            <span className="span">Posts</span>
          </NavLink>
        </div>
        <div className="header_item">
          <NavLink to="/users">
            <span className="span">Users</span>
          </NavLink>
        </div>
        <div className="header_item">
          <NavLink to="/photos">
            <span className="span">Photos</span>
          </NavLink>
        </div>
      </div>
      <div>
        <input
          type="text"
          id="search-navbar"
          className="block p-2 pl-10 w-full text-gray-900 bg-gray-50 rounded-lg border border-gray-300 sm:text-sm focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
        />
      </div>
    </header>
  );
};

export default Header;

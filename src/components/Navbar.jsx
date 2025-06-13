import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth'; // Adjust the path as necessary
import { FaBars, FaHome, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import './Navbar.css'; // Import your CSS for styling

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar">
      {/* Hamburger menu for mobile */}
      <input type="checkbox" id="navbar-toggle" className="navbar-toggle" />
      <label htmlFor="navbar-toggle" className="navbar-toggle-label">
        <FaBars style={{ color: 'lightGreen' }} />
      </label>

      <ul className="navbar-links">
        <li>
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/about" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => isActive ? 'active-link' : ''}
          >
            Contact
          </NavLink>
        </li>

        {/* Conditional auth links */}
        {user ? (
          <>
            <li>
              <NavLink 
                to="/dashboard" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Dashboard
              </NavLink>
            </li>
            <li>
              <button onClick={handleLogout} className="logout-button">
                Logout
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <NavLink 
                to="/login" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Login
              </NavLink>
            </li>
            <li>
              <NavLink 
                to="/signup" 
                className={({ isActive }) => isActive ? 'active-link' : ''}
              >
                Sign Up
              </NavLink>
            </li>
          </>
        )}
      </ul>

      {/* Mobile-only icons */}
      <ul className="navbar-mobile-icons">
        <li>
          <NavLink to="/" end>
            <FaHome style={{ color: 'lightGreen' }} size={22} />
          </NavLink>
        </li>
        {!user && (
          <>
            <li>
              <NavLink to="/login">
                <FaSignInAlt style={{ color: 'lightGreen' }} size={22} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup">
                <FaUserPlus style={{ color: 'lightGreen' }} size={22} />
              </NavLink>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
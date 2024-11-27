// Import NavLink for active state styling in navigation
import { NavLink } from 'react-router-dom';

/**
 * Navigation component that provides quick access links to predefined search categories
 * Uses NavLink for automatic active state styling when route matches
 */
const Nav = () => {
  return (
    // Main navigation container
    <nav className="main-nav">
      <ul>
        {/* Each NavLink updates URL and triggers new search */}
        <li><NavLink to="/search/cats">Cats</NavLink></li>
        <li><NavLink to="/search/dogs">Dogs</NavLink></li>
        <li><NavLink to="/search/birds">Birds</NavLink></li>
      </ul>
    </nav>
  );
};

export default Nav;

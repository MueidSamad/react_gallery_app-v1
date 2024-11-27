import { useRef } from "react";
import { useNavigate } from "react-router-dom"; // Import for programmatic navigation

/**
 * Search component that handles photo search functionality
 * Renders a search form with input field and submit button
 */
const Search = () => {
  // Create a ref to access the search input value
  const userQueryRef = useRef();
  // Hook for programmatic navigation
  const navigate = useNavigate();

  /**
   * Handles the search form submission
   * Prevents default form behavior, validates and processes the search query
   * @param {Event} e - The form submission event
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    // Get and trim the search query
    const userQuery = userQueryRef.current.value.trim();
    if (userQuery) {
      // Navigate to search results page with the query
      navigate(`/search/${userQuery}`);
      // Reset the form after submission
      e.currentTarget.reset();
    }
  };

  return (
    // Search form with input and styled SVG button
    <form className="search-form" onSubmit={handleSubmit}>
      <input type="search" placeholder="Search" ref={userQueryRef} required />
      <button type="submit" className="search-button">
        {/* Magnifying glass SVG icon */}
        <svg fill="#fff" height="24" viewBox="0 0 23 23" width="24" xmlns="http://www.w3.org/2000/svg">
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </form>
  );
};

export default Search;

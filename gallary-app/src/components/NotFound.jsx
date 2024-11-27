/**
 * NotFound component displays when search returns no results
 * Renders a message to inform users their search was unsuccessful
 */
const NotFound = () => (
  // Container for no results message with specific styling
  <li className="not-found">
    {/* Main heading for no results state */}
    <h3>No Results Found</h3>
    {/* Helpful message encouraging users to try another search */}
    <p>You search did not return any results. Please try again.</p>
  </li>
);

export default NotFound;

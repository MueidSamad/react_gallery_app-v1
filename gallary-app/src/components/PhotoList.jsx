/**
 * Renders a list of photos based on the provided `photos` array and the current search query.
 *
 */
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom"; // For accessing URL parameters and location
import Photo from "./Photo";
import NotFound from "./NotFound";
import PropTypes from 'prop-types';


const PhotoList = ({ photos, changeQuery, pageTitle, loading }) => {
  // Get current location and URL parameters
  const location = useLocation();
  const { query } = useParams();

  // Extract the search query from the current path
  const currentPathQuery = location.pathname.slice(1);

  // Update the search query when URL changes
  useEffect(() => {
    if (query && query !== pageTitle) {
      // Update query if URL parameter exists and differs from current page title
      changeQuery(query);
    } else if (currentPathQuery !== pageTitle) {
      // Update query if path differs from current page title
      changeQuery(currentPathQuery);
    }
  }, [location.pathname]);

  return (
    <div className="photo-container">
      {loading ? (
        // Show loading message while fetching photos
        <h2>Loading search results, please wait...</h2>
      ) : (
        <>
          {/* Display search results title */}
          <h2>Results for {pageTitle}</h2>
          <ul>
            {photos.length > 0 ? (
              // Map through photos and render Photo component for each
              photos.map(({ id, server, secret }) => (
                <Photo
                  key={id}
                  url={`https://live.staticflickr.com/${server}/${id}_${secret}.jpg`}
                />
              ))
            ) : (
              // Show NotFound component if no photos are found
              <NotFound />
            )}
          </ul>
        </>
      )}
    </div>
  );
};


PhotoList.propTypes = {
  photos: PropTypes.array.isRequired,
  changeQuery: PropTypes.func.isRequired,
  pageTitle: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired
};
export default PhotoList;

import PropTypes from 'prop-types';

/**
 * Photo component that renders a single image in the gallery
 */
const Photo = ({ url }) => (
    // Wrap image in list item for gallery grid layout
    <li>
        <img src={url} alt="" />
    </li>
);

// PropTypes validation ensures url is required and must be a string
Photo.propTypes = {
    url: PropTypes.string.isRequired,
};

export default Photo;

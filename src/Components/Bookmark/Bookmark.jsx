import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
  return (
    <div className="font-bold py-4 bg-gray-200 border my-4">
      <h3>{bookmark.title}</h3>
    </div>
  );
};

Bookmark.propTypes = {
  bookmark: PropTypes.object.isRequired
};

export default Bookmark;
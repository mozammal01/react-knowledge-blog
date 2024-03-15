import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <>

      <div className="md:w-1/3 border-2 border-red-300 m-3 p-5">

        <div className="font-bold py-4 mb-8 bg-gray-200 border text-blue-700 border-blue-700">
          <p>Spent time on read : {readingTime}<span></span></p>
        </div>

        <div>
          <p className="font-bold text-2xl">Bookmarks Here : {bookmarks.length}</p>
          {
            bookmarks.map(bookmark => <Bookmark
              key={bookmark.id}
              bookmark={bookmark}
            ></Bookmark>)
          }
        </div>

      </div>

    </>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number.isRequired
}

export default Bookmarks;
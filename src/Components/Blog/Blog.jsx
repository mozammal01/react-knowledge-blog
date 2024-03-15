import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";


const Blog = ({ blog, handleAddToBookmarks, handleMarkAsRead }) => {
  const {id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className='m-5 border-2 border-gray-600'>

      <div className="">
        <img src={cover} alt="" />
      </div>

      <div className='flex justify-between items-center font-semibold'>

        <div className='p-3 flex items-center'>

          <div className='m-2'>
            <img className='w-16' src={author_img} alt={author} />
          </div>

          <div>
            <span className='font-bold text-xl'>{author}</span>
            <p className='text-gray-600'>{posted_date}</p>
          </div>

        </div>

        <div className='p-3 text-gray-600 flex items-center '>
          <p>{reading_time} min read </p>
          <button onClick={() => handleAddToBookmarks(blog)}><FaRegBookmark className='m-2' /></button>
        </div>

      </div>

      <div>
        <p className='font-semibold text-2xl m-2'>{title}</p>
      </div>

      <div className='flex'>
        {
          hashtags.map((hash, idx) => <span
            key={idx}
            className=' p-3 text-gray-600'
          ><a href="">{hash}</a>
          </span>)
        }
      </div>

      <div className='text-start m-4' >
        <button
          onClick={() => handleMarkAsRead(reading_time, id)}
          className='text-indigo-700 underline font-bold'
        >Mark as read</button>
      </div>

    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmarks: PropTypes.func.isRequired,
  handleMarkAsRead: PropTypes.func.isRequired
}

export default Blog;
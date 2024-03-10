import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
  console.log(blog);
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

        <div className='p-3 text-gray-600'>
          <p>{reading_time} min read</p>
        </div>

      </div>

      <div>
        <p className='font-semibold text-2xl m-2'>{title}</p>
      </div>

      <div className='flex'>

        <p className=' p-3 text-gray-600'>{hashtags[0]}</p>
        <p className=' p-3 text-gray-600'>{hashtags[1]}</p>
        <p className=' p-3 text-gray-600'>{hashtags[2]}</p>
      </div>

    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;
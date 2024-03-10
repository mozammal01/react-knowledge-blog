import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
  return (
    <div>
      <h4>Its Showtime</h4>
      <div className="w-80">
        <img src={blog.cover} alt="" />
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired
}

export default Blog;
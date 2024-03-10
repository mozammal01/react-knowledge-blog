import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('blogs.json')
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, [])


  return (
    <div className="md:w-2/3 border-2 border-red-400 p-5 m-3">
      <h3 className="text-2xl font-semibold">Blogs : {blogs.length}</h3>
      {
        blogs.map(blog => <Blog key={blog.id} blog={blog}></Blog>)
      }
    </div>
  );
};

export default Blogs;
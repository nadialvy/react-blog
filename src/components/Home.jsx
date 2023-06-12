import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleDelete = (id) => {
    const newBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(newBlogs);
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:8000/blogs')
      .then(res => {
        return res.json();
      })
      .then((data) => {
        setIsLoading(false);
        setBlogs(data);
      })
    }, 1000)
  }, [])

  return (
    <div className="mx-32 mt-8">
      {isLoading && <div className="text-center text-xl font-semibold text-gray-800">Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
    </div>
  );
};

export default Home;

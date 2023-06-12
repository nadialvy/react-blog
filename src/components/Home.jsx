import { useState } from "react";

const Home = () => {

  const [blogs, setBlogs] = useState([
    { title: "My new website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome party!", body: "lorem ipsum...", author: "yoshi", id: 2 },
    { title: "Web dev top tips", body: "lorem ipsum...", author: "mario", id: 3 },
  ]);

  return (
    <div className="mx-32 mt-8">
      {blogs.map((blog) => (
        <div className="blog-preview mb-5 hover:cursor-pointer hover:shadow-lg px-4 py-6 rounded-lg bg-slate-100" key={blog.id}>
          <h2 className="font-bold text-2xl text-yellow-500">{blog.title}</h2>
          <p className="text-gray-800 font-semibold">Written by: {blog.author}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;

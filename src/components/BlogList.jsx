import { Link } from "react-router-dom";

const BlogList = ({ blogs, title }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">{ title }</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview mb-5 hover:cursor-pointer hover:shadow-lg px-4 py-6 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all" key={blog.id}>
            <Link to={`/blog/${blog.id}`}>
              <div className="flex justify-between">
                <h2 className="font-semibold text-2xl text-yellow-500">{blog.title}</h2>
                {/* <button onClick={() => handleDelete(blog.id)} className="px-4 py-2 bg-red-300 rounded-sm text-sm hover:bg-red-500 hover:text-white">Delete</button> */}
              </div>
              <p className="text-sm text-gray-500">{blog.date}</p>
              <p className="text-gray-800 mt-4">Written by: {blog.author}</p>
            </Link>
          </div>
        ))}
      </div>
    </>
   );
}

export default BlogList;
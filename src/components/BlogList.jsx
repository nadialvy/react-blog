const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-preview mb-5 hover:cursor-pointer hover:shadow-lg px-4 py-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all" key={blog.id}>
          <h2 className="font-bold text-2xl text-yellow-500">{blog.title}</h2>
          <p className="text-gray-800 font-semibold">Written by: {blog.author}</p>
        </div>
      ))}
    </div>
   );
}

export default BlogList;
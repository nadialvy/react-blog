const BlogList = ({ blogs, title }) => {
  return (
    <>
      <h1 className="text-3xl font-bold mb-4 text-gray-800 text-center">{ title }</h1>
      <div className="blog-list">
        {blogs.map((blog) => (
          <div className="blog-preview mb-5 hover:cursor-pointer hover:shadow-lg px-4 py-6 rounded-lg bg-slate-50 hover:bg-slate-100 transition-all" key={blog.id}>
            <h2 className="font-semibold text-2xl text-yellow-500">{blog.title}</h2>
            <p className="text-gray-800">Written by: {blog.author}</p>
          </div>
        ))}
      </div>
    </>
   );
}

export default BlogList;
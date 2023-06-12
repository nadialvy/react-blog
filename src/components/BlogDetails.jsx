import { useParams } from "react-router-dom";
import useFetch from "../useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, loading, error } = useFetch('http://localhost:8000/blogs/' + id);

  return ( 
    <div className="blog-details mx-32 mt-8 bg-yellow-200 p-8 rounded-md shadow-sm hover:cursor-pointer hover:-translate-y-2 hover:shadow-xl transition-all">
      {error && <div className="text-center text-xl font-semibold text-red-800">{error}</div>}
      {loading && <div className="text-center text-xl font-semibold text-gray-800">Loading...</div>}
      {blog && (
        <article className="blog-post">
          <h2 className="font-semibold text-2xl">{blog.title}</h2>
          <p className="text-lg mb-4">{blog.author}</p>
          <p>{blog.content}</p>
          <p className="mt-10 text-lg">{blog.date}</p>
        </article>
      )}
    </div>
   );
}
 
export default BlogDetails;